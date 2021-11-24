import React from "react";


import styles from './styles.module.scss'

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
    <div className={styles.toc}> 
      <h1>
        {data.title}
      </h1>
      <ul className={styles.scrollable}>
        {data.sections.map((section)=>(
          <li key={section.number} className={section.toclevel === 1 ? styles.tocLevel1 : styles.tocLevel2}>
            <a href={'#' + section.anchor}>
              {section.line}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}