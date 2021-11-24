import axios from "axios";
import React, { useEffect, useState } from "react";

import styles from './styles.module.scss'

interface Props {
  page:string;
  lang:string;
}



export default function BackgroundImage({page,lang}:Props){
  
  const [imageUrl, setImageUrl] = useState('');
  useEffect(()=>{
    const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&page=${page}&prop=images&format=json&section=2&origin=*`
    async function getData(){
      const  {data} = await axios.get(url);
      const images = data.parse.images.filter((image:string)=>image.includes('.jpg'))

      const getImageApiUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&titles=File:${images[2]}&prop=imageinfo&iiprop=url&format=json&origin=*`
      const imageData = await axios.get(getImageApiUrl);
    
      const gotImageUrl = imageData.data.query.pages['-1'].imageinfo[0].url;
     
      console.log(gotImageUrl)
      setImageUrl(gotImageUrl);

    }
    getData();
  },[page,lang])
  
  return (
    <div className={styles.bgWrapper} >
      {imageUrl && 
        <img src={imageUrl} className={styles.image} alt={imageUrl} />
      }
    </div>
  )
}

