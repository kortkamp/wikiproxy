import { useState } from "react";
import React from "react";
import { Container, Header, MenuButton, TocItem, TocList } from "./styles";


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

const MenuIco = ()=>(
  <svg id="menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.833 92.833">
    <g >
      <path d="M89.834,1.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V4.75
        C92.834,3.096,91.488,1.75,89.834,1.75z"/>
      <path d="M89.834,36.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V39.75
        C92.834,38.096,91.488,36.75,89.834,36.75z"/>
      <path d="M89.834,71.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V74.75
        C92.834,73.095,91.488,71.75,89.834,71.75z"/>
    </g>
  </svg>
)
  
export default function Toc({ data }:Props){
  const [isHide, setIsHide] = useState(false);

  return (
    <Container className={isHide ? 'hide' : ''}> 
        <MenuButton onClick={()=>{setIsHide(!isHide)}} >
          <MenuIco />
        </MenuButton>
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