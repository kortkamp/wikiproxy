import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'

import ScrollContainer from 'react-indiana-drag-scroll'

import { GetFeatured } from '../../services'

import { Container, List, FeaturedItem , Background, CardInfo} from './styles'

interface IFeaturedArticle {
  title: string;
  normalizedtitle: string;
  pageid: number,
  thumbnail : {
    source: string;
  }
  content_urls: {
    desktop: {
      page: string,
    },
    mobile: {
      page: string,
    }
  },
  extract: string
}

export function FeaturedList(){
  const elRef = useRef(null);
  const [articles, setArticles] = useState<IFeaturedArticle[]>([])
  
  const language = 'en'

  const [isInView, setIsInView] = useState(false);

  useEffect(()=>{
    const iObserver = new IntersectionObserver(
      entries => {
        if(entries[0].intersectionRatio > 0 ){
         setIsInView(true);
        }else {
          setIsInView(false);
        }
      }
    );
    if(elRef.current){
      iObserver.observe(elRef.current);
    }

    return(()=>{
      iObserver.disconnect();
    })
  },[])

  useEffect(()=>{
    async function getData(){
      const data = await GetFeatured();
      if(data){
        setArticles(data.mostread.articles as IFeaturedArticle[])
      }
    }
    getData();
  },[])

  return (
    <Container ref= { elRef}>
      <ScrollContainer className="scroll-container">
        <List>

        { articles
        .filter((article)=>article.thumbnail?.source)
        .map((article,index)=>(
          <FeaturedItem 
            key={article.pageid}  
            index= { index} 
            className={isInView ? 'inView': ''}
          >
            <Background className="bg" style={{backgroundImage:`url(${article.thumbnail.source})`}}/>
            <Link href={`/${'en'}/${article.title}`}>
              
              <a target="_blank">
                <CardInfo className="info">
                  <span>
                    {article.normalizedtitle}
                    <i>
                      Read this article
                    </i> 
                  </span>
                </CardInfo>
              </a>
            
            </Link>
          </FeaturedItem>
        ))}
        </List>
      </ScrollContainer>

    </Container>
  )
}