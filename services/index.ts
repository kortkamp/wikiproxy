import axios from "axios";

interface FirstSectionData {
  httpStatus: number;
  htmlData: string;
  sectionsData: string;
}
export async function GetFirstSection(language: string, article:string){
  const url = `https://${language}.wikipedia.org/w/api.php?action=parse&page=${encodeURI(article)}&mobileformat=&prop=text&section=0&format=json&effectivelanglinks=&redirects=`
  const sectionsUrl = `https://${language}.wikipedia.org/w/api.php?action=parse&page=${encodeURI(article)}&prop=sections&format=json`

  try{
    const { data:sectionsData } = await axios.get(sectionsUrl);
    const  { data } = await axios.get(url);

    const htmlData = data.parse.text['*'].replace(/\/wiki\//g, `/${language}/`);
    
    return {
        httpStatus: 200,
        htmlData,
        sectionsData
    }
  }
  catch (err){
    return {
      httpStatus: 404,
    }
  }
}


export async function GetFeatured(language:string = 'en'){

  let today = new Date();
  let year = today.getFullYear();
  let month = (today.getMonth() + 1).toString().padStart(2, "0");
  let day = today.getDate().toString().padStart(2, "0");
  let url = `https://api.wikimedia.org/feed/v1/wikipedia/${language}/featured/${year}/${month}/${day}`;

  const { data } = await axios.get(url);

  return data;
}