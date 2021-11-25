import React, { useState } from "react";
import dynamic from "next/dynamic";
import Script from 'next/script'
import Head from "next/head";
import axios from 'axios';

import Toc from "../../components/Toc";
import { Header } from "../../components/Header";
const WikiSection = dynamic(() => import("../../components/WikiSection"));
const  BackgroundImage  = dynamic(() => import("../../components/BackgroundImage"));

import {Container} from '../../styles/Article';

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
  stringPath: string;
  stringSlug:string;
  data:{ 
    parse:  { text:string}
  };
  sectionsData:SectionsData;
}

const Post = ({stringPath,stringSlug,data,sectionsData}:Props) => {

  const [language, setLanguage] = useState(stringPath);

  return (
    <>
      <Head>
        <title>Test</title>
        {/* <link href="https://wikiwand-19431.kxcdn.com/css/wikiwand.early.min.4165aba9.css" rel="stylesheet" key="test"/> */}
      </Head>
      
      <Toc data= { sectionsData.parse }></Toc>
      <Header language={language}/>
      <BackgroundImage page={stringSlug} lang={stringPath}></BackgroundImage>
      <Container>
        <div className='title'>
          {sectionsData.parse.title}
        </div>
        <div className="contentWraper article_content light">
          <div id="overview" className="article_content" dangerouslySetInnerHTML={{ __html: data.parse.text['*'] }} ></div>
         
          {sectionsData.parse.sections.filter((section)=>section.byteoffset > 0)
          .map((section)=>(
              <WikiSection key={section.index} lang={stringPath} page={stringSlug} section={section}/>    
          ))}
        </div>
      </Container>
    </>
  )
}

export const getServerSideProps = async ({query}) => {
  
  const { slug , path} = query;

  const stringPath = path as string;
  const stringSlug = slug as string;

  const url = `https://${stringPath}.wikipedia.org/w/api.php?action=parse&page=${stringSlug}&mobileformat=&prop=text&section=0&format=json&effectivelanglinks=`

  const sectionsUrl = `https://${stringPath}.wikipedia.org/w/api.php?action=parse&page=${stringSlug}&prop=sections&format=json`

  const {data:sectionsData} = await axios.get(sectionsUrl);
  const  {data} = await axios.get(url);


  return {
    props: {stringPath,stringSlug, data, sectionsData}, // will be passed to the page component as props
  }
}


export default Post