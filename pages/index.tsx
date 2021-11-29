import type { NextPage } from 'next';
import Link from 'next/link'
import Head from 'next/head';
import React, { useState } from 'react';
import { WikiSearch } from '../components/WikiSearch';
import { Header } from '../components/Header';

import { Container , Content , SearchResult, SearchItem , Title, Snippet, WikiView } from '../styles/Home';
import axios from 'axios';
import { FeaturedList } from '../components/FeaturedList';
import { Footer } from '../components/Footer';
import { FloatingTagsBackground } from '../components/FloatingTagsBackground';


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
        {/* <WikiSearch action={handleSearch}/> */}
        <WikiView>
            <h1>Upgrade your reading Experience</h1>
            <p>A perfectly designed Wikipedia interface for a great reading experience</p>
            <FloatingTagsBackground />
        </WikiView>
        <FeaturedList />
        <WikiView>
            <h1>Upgrade your reading Experience</h1>
        </WikiView>

        <Footer />
      </Content>
     
    </Container>
  )
}

export default Home
