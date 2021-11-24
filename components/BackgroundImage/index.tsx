import axios from "axios";
import React, { useEffect, useState } from "react";

import styles from './styles.module.scss'

interface Props {
  page:string;
  lang:string;
}



export default function BackgroundImage({page,lang}:Props){
  
  const [image, setImage] = useState('');
  useEffect(()=>{
    const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&page=${page}&prop=images&format=json&section=2&origin=*`
    async function getData(){
      const  {data} = await axios.get(url);
      const images = data.parse.images.filter((image:string)=>image.includes('.jpg'))
      setImage(images[0]);

    }
    getData();
  },[page,lang])
  const imgUrl = `https://${lang}.wikipedia.org/wiki/File:${image}`
  return (
    <div className={styles.bgWraper} style={{backgroundImage:`url(https://${lang}.wikipedia.org/wiki/File:${image}?origin=*`}} >
      {image}
      <img src={imgUrl} alt="" />
    </div>
  )
}