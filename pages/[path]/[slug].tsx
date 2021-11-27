import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import axios from 'axios';

import Toc from "../../components/Toc";
import { Header } from "../../components/Header";
const WikiSection = dynamic(() => import("../../components/WikiSection"));

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
        <title>Wikiwand</title>
      </Head>
      
      {/* <BackgroundImage page={stringSlug} lang={stringPath}></BackgroundImage> */}
      <Header language={language}/>
      <Container>
        <Toc data= { sectionsData.parse } />
        <div className="contentWraper article_content">
          <div className='title'>
            {sectionsData.parse.title}
          </div>
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

  let stringPath = path as string;
  if(stringPath === 'wiki'){
    stringPath = 'en';
  }
  const stringSlug = slug as string;

  const url = `https://${stringPath}.wikipedia.org/w/api.php?action=parse&page=${encodeURI(stringSlug)}&mobileformat=&prop=text&section=0&format=json&effectivelanglinks=&redirects=`
 
  const sectionsUrl = `https://${stringPath}.wikipedia.org/w/api.php?action=parse&page=${encodeURI(stringSlug)}&prop=sections&format=json`

  try{
    const {data:sectionsData} = await axios.get(sectionsUrl);
    const  {data} = await axios.get(url);
    return {
      props: {stringPath,stringSlug, data, sectionsData}, // will be passed to the page component as props
    }
  }
  catch (err){
    
  }

  return {
    props: {}, 
  }

}


export default Post