import React, { useEffect, useState } from "react";
import axios from "axios";

import { Container } from './styles'

interface SectionData {
  toclevel: number,
  level: string
  line: string,
  number: string
  index: string
  fromtitle: string
  byteoffset: number
  anchor: string
}

interface Props {
  lang: string;
  page:string;
  section: SectionData;
}

interface Data {
  parse?: {
    title: string,
    pageid: number,
    text: {
      "*": string
    }
  }
}
export default function WikiSection({ lang, page , section}:Props){
  const [htmlData, setHtmlData] = useState('');

  const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&page=${page}&mobileformat=&prop=text&section=${section.index}&format=json&origin=*`

  useEffect(()=>{
    async function getData(){
      const  {data} = await axios.get(url);
      setHtmlData(data.parse?.text['*'].replace(/\/wiki\//g, `/${lang}/`));
    }
    getData();
  },[url,lang])
  

  return (
    <Container
      className={'article_content'}  
      dangerouslySetInnerHTML={{ __html: htmlData || '' }}>
    </Container>
  )

}