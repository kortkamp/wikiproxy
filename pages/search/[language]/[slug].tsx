import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from 'axios';

import { Header } from "../../../components/Header";
import { WikiSearch } from "../../../components/WikiSearch";

import { SearchResult, SearchItem , Title, Snippet } from '../../../styles/Home';



interface Props {
  language: string;
  searchText: string;
}


interface IResult {
  ns: number,
  title: string,
  pageid: number,
  size: number,
  wordcount: number,
  snippet: string,
  timestamp: string
}

const SearchPage = ({
  language,
  searchText
}:Props) => {
 

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

  useEffect(()=>{
    handleSearch(searchText);
  },[])
  return (
    <>
      <Head>
        <title>Wikiwand</title>
      </Head>
      
      <Header language={language}/>

      <SearchResult > 
          {isLoading && 
            <img src="/loading.gif" alt="" />
          }
          { searchResult.map((result)=>(
            <SearchItem onClick={()=> console.log(result.title)} key={result.pageid}> 
                <Link href={`/${language}/${result.title}`} >
                    <Title>
                      <h1>{result.title}</h1>
                      <span>{`${window.location.origin}/${language}/${result.title}`}</span>
                    </Title>
                </Link>
                <Snippet dangerouslySetInnerHTML={{ __html: result.snippet }}/>
              </SearchItem>
          ))}
        </SearchResult> 
    </>
  )
}

export const getServerSideProps = async ({query}) => {
  const { slug , language} = query;
  
  return {
    props: {language, searchText:slug}, 
  }
}

export default SearchPage