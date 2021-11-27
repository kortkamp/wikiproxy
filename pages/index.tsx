import type { NextPage } from 'next';
import Link from 'next/link'
import Head from 'next/head';
import React, { useState } from 'react';
import { WikiSearch } from '../components/WikiSearch';
import { Header } from '../components/Header';

import { Container , Content , SearchResult, SearchItem , Title, Snippet } from '../styles/Home';
import axios from 'axios';

interface IResult {
  ns: number,
  title: string,
  pageid: number,
  size: number,
  wordcount: number,
  snippet: string,
  timestamp: string
}

const Home: NextPage = () => {
  const [language, setLanguage] = useState('en');

  const [searchResult, setSearchResult] = useState<IResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch(text: string){
    var url = `https://${language}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${text}&format=json&origin=*`; 

    setIsLoading(true);
    setSearchResult([]);

    axios.get(url)
    .then(function (response) {
      setSearchResult(response.data.query.search);
      setIsLoading(false);
    });

  }

  return (
    <Container>
      <Head>
        <title>Wikiwand</title>
      </Head>
      <Header language={language}/>

      <Content className={searchResult.length ? 'filled' : ''}>
        <WikiSearch action={handleSearch}/>
        <SearchResult > 
          {isLoading && 
            <img src="/loading.gif" alt="" />
          }
          {searchResult.map((result)=>(
            <SearchItem onClick={()=> console.log(result.title)} key={result.pageid}> 
                <Link href={`/en/${result.title}`} >
                    <Title>
                      <h1>{result.title}</h1>
                      <span>{`${window.location.href}${language}/${result.title}`}</span>
                    </Title>
                </Link>
                <Snippet dangerouslySetInnerHTML={{ __html: result.snippet }}/>
              </SearchItem>
          ))}
        </SearchResult> 
      </Content>
     
    </Container>
  )
}

export default Home
