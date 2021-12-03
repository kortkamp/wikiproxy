import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import axios from 'axios';

import Toc from "../../components/Toc";
import { Header } from "../../components/Header";
const WikiSection = dynamic(() => import("../../components/WikiSection"));

import {Container} from '../../styles/Article';
import { useData } from "../../hooks/useData";
import * as services from "../../services";
import { ScrollButton } from "../../components/ScrollButton";

interface PropsMobileView {
  stringPath: string;
  stringSlug:string;
  data:{mobileview: {sections: {text:string}[]} };
}

interface SectionsData {
  parse: {
      title: string,
      pageid: number,
      sections: 
          {
              toclevel: number,
              level: string
              line: string,
              number: string
              index: string
              fromtitle: string
              byteoffset: number
              anchor: string
          }[]
  }
}

interface Props {
  language: string;
  articleName:string;
  httpStatus: number;
  htmlData: any;
  sectionsData: SectionsData;
}

const Post = ({
  language,
  articleName,
  httpStatus,
  htmlData,
  sectionsData
}:Props) => {

  const { initializeInClientSide,setUserData } = useData();

  const pageFound = httpStatus === 200;

  // using dangerouslySetInnerHTML seems to cause user block on Vercel
  // fix that

  return (
    <>
      <Head>
        <title>Wikiwand</title>
      </Head>
      
      <Header language={language}/>
      {
        pageFound ?
        <Container>
          <Toc data= { sectionsData.parse } />
          <div className="contentWraper article_content">
            <div className='articleTitle'>
              {sectionsData.parse.title}
            </div>

            {/* <div id="overview" className="article_content" dangerouslySetInnerHTML={{ __html: htmlData }} ></div> */}
          
            { sectionsData.parse.sections
            .filter((section)=>section.byteoffset > 0)
            .map((section)=>(
                <WikiSection key={section.index} lang={language} page={articleName} section={section}/>    
            ))}
          </div>
          <ScrollButton />
        </Container>
        :
        <Container>
          <div className="contentWraper article_content">
            <h1>
              404 - Not Found
            </h1>
          </div>
        </Container>

      }
      
    </>
  )
}

interface IArticleQuery {
  query: {
    path: string;
    slug: string;
  }
}

export const getServerSideProps = async ({query}:IArticleQuery) => {
  const { slug , path} = query;
  // console.log(query)

  const articleName = slug as string;
  const language = path as string; 

  const responseData = await services.GetFirstSection(language,articleName);
  
  return {
    props: {language, articleName , ...responseData}, 
  }
}

export default Post