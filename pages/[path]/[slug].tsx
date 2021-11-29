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


  return (
    <>
      <Head>
        <title>Wikiwand</title>
      </Head>
      
      {/* <BackgroundImage page={stringSlug} lang={stringPath}></BackgroundImage> */}
      <Header language={language}/>
      {
        pageFound ?
        <Container>
          <Toc data= { sectionsData.parse } />
          <div className="contentWraper article_content">
            <div className='title'>
              {sectionsData.parse.title}
            </div>
            <div id="overview" className="article_content" dangerouslySetInnerHTML={{ __html: htmlData }} ></div>
          
            { sectionsData.parse.sections
            .filter((section)=>section.byteoffset > 0)
            .map((section)=>(
                <WikiSection key={section.index} lang={language} page={articleName} section={section}/>    
            ))}
          </div>
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

export const getServerSideProps = async ({query}) => {
  const { slug , path} = query;

  const articleName = slug as string;
  const language = path as string; 

  const responseData = await services.GetFirstSection(language,articleName);
  
  return {
    props: {language, articleName , ...responseData}, 
  }
}





export const __getServerSideProps = async ({query}) => {
  
  const { slug , path} = query;

  let stringPath = path as string;

  let language = path as string; 
  if(stringPath === 'wiki'){
    language = 'en';
  }
  const stringSlug = slug as string;

  const url = `https://${language}.wikipedia.org/w/api.php?action=parse&page=${encodeURI(stringSlug)}&mobileformat=&prop=text&section=0&format=json&effectivelanglinks=&redirects=`
  const sectionsUrl = `https://${language}.wikipedia.org/w/api.php?action=parse&page=${encodeURI(stringSlug)}&prop=sections&format=json`

  try{
    const {data:sectionsData} = await axios.get(sectionsUrl);
    const  { data } = await axios.get(url);

    const wikiData = data.parse.text['*'].replace(/\/wiki\//g, `/${language}/`);
    
    return {
      props: {stringPath,stringSlug, data: wikiData , sectionsData}, // will be passed to the page component as props
    }
  }
  catch (err){
    console.log(err)
  }

  return {
    props: {}, 
  }

}


export default Post