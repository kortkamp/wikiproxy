import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import React, { useState } from 'react';

import { WikiSearch } from '../components/WikiSearch';
import { Header } from '../components/Header';
import { FeaturedList } from '../components/FeaturedList';
import { Footer } from '../components/Footer';
import { FloatingTagsBackground } from '../components/FloatingTagsBackground';

import { 
  Container , 
  Content , 
  SearchResult, 
  SearchItem , 
  Title, 
  Snippet, 
  WikiView , 
  WikiBanner,
  BannerItem,
  BannerAside,
  BannerText,
  FloatingBetween
} from '../styles/Home';

import laptopImg from '../public/laptop.jpg'
import mobileImg from '../public/mobile.jpg'

const Home: NextPage = () => {
  const [language, setLanguage] = useState('en');
  

  const [searchResult, setSearchResult] = useState([]);


  
  

  return (
    <Container className='scrollArea' >
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
        <FloatingBetween>
          <WikiSearch />
        </FloatingBetween>
        <WikiView style={{backgroundColor:'rgba(30,30,30,0.1)', height:'300px'}}>
          
        
            <p>
              “The more that you read, the more things you will know.
               The more that you learn, the more places you’ll go.”
            </p>
            <strong> Dr. Seuss</strong>
        </WikiView>

        <WikiBanner >
          <BannerItem>
            <BannerText>
              <h1>Wikipedia Database</h1>
              <p>
                We deliver more than 50 million articles written and reviewed
                by thousand of experts in 285 different languages.
              </p>
            </BannerText>
            <BannerAside>
              <Image 
                src={laptopImg}
                // height= '1000'
                layout={'fixed'}  
                height= '300px'
                width='550px'
                alt='laptop'
              />
              
            </BannerAside>
          </BannerItem>
          <BannerItem className="inverse">
            <BannerText>
              <h1>Responsive Interface</h1>
              <p>
                Wonderful layout either on desktop or in your mobile device
                for a great reading experience everywhere.
              </p>
            </BannerText>
            <BannerAside>
              <Image 
                src={mobileImg } 
                layout={'fixed'}  
                height= '500'
                width='269'
                alt='mobile phone'
              >
              </Image>
            </BannerAside>
            
          </BannerItem>
        </WikiBanner>

        {/* <WikiView>
          <h1>Today</h1>
          <p></p>
        </WikiView> */}

        <FeaturedList />
        <WikiView>
          
        
            <h1>Upgrade you reading Experience</h1>
        </WikiView>
        <Footer/>
      </Content>
     
    </Container>
  )
}

export default Home
