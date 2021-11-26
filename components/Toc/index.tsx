import React from "react";
import { Container, Header, TocItem, TocList } from "./styles";


interface Props {
  data: {
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
// {
//   "toclevel": 1,
//   "level": "2",
//   "line": "Etymology",
//   "number": "1",
//   "index": "1",
//   "fromtitle": "Brazil",
//   "byteoffset": 22454,
//   "anchor": "Etymology"
// },
  
export default function Toc({ data }:Props){
  

  return (
    <Container> 
      <Header>
        {data.title}
      </Header>
      <TocList>
        <TocItem className="tocLevel1">
          <a href={'#overview'}>
            Introduction
          </a>
        </TocItem>
        {data.sections.map((section)=>(
          <TocItem key={section.number} className={section.toclevel === 1 ? "tocLevel1" : "tocLevel2"}>
            <a href={'#' + section.anchor}>
              {section.line}
            </a>
          </TocItem>
        ))}
      </TocList>
    </Container>
  )
}