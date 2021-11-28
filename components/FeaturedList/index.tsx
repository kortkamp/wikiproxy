import Link from 'next/link'
import React, { useState, useEffect } from 'react'

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
  const language = 'en'

  const [articles, setArticles] = useState<IFeaturedArticle[]>([])

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
    <Container>
      <ScrollContainer className="scroll-container">
        <List>

        { articles
        .filter((article)=>article.thumbnail?.source)
        .map((article)=>(
          <FeaturedItem key={article.pageid}  >
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