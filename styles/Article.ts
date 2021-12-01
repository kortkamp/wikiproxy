import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;

  font: ${({theme})=>theme.font};
  color: ${(props)=>props.theme.colors.text};
  background-color: ${(props)=>props.theme.colors.shape};
  line-height: 1.5;

 

  /* background-color: ${({theme})=>theme.colors.background}; */

  

  .articleTitle {
    font-size: 3rem;
    padding: 10px 0px;
  }

  .contentWraper {
    padding: 20px 30px;

    @media (max-width: 720px){
      padding: 20px 10px;

    }
  }

  .article_content {
    position: relative;
    min-width: 0;
    max-width: 1100px;
    margin: 0 auto;
  }
   
   
  a {
    text-decoration: none;
    color: ${({theme})=>theme.colors.link};
  }



  section {
    margin-top: 15px;
  }
  h3.in-block {
    margin: 2rem 0;
  }

  div.tright {
    float: right;
    clear: right;
    margin: 0.5em 0 1.3em 1.4em;
  }

  div.tleft {
    float: left;
    clear: left;
    margin: 0.5em 1.4em 1.3em 0;
  }

  .thumbcaption {
    font-size: .75em;
  }

  .reference {
    font-size: 0.5rem;
  }

  .infobox {
    margin: 0.5em 0 1em 35px !important;
    max-width: 320px !important;
    width: auto !important;
    float: right !important;
    clear: right !important;

    font-size: 90%;
    border: 1px solid #eaecf0;
    background-color: ${({theme})=>theme.colors.background};;
  }

  .wikitable {
    margin: 1em 0;
    overflow: auto;
    overflow-y: hidden;
    overflow-x: auto;
    display: block;
    width: 100% !important;
    box-sizing: border-box;
    
    border-spacing: 0px;
    
    & > * > tr > td , th {
      border: 1px solid #54595d;
      border-top-color: rgba(84, 89, 93, 0.3);
      border-top-style: solid;
      border-top-width: 1px;
      border-right-color: rgba(84, 89, 93, 0.3);
      border-right-style: solid;
      border-right-width: 1px;
      border-bottom-color: rgba(84, 89, 93, 0.3);
      border-bottom-style: solid;
      border-bottom-width: 1px;
      border-left-color: rgba(84, 89, 93, 0.3);
      border-left-style: solid;
      border-left-width: 1px;
      border-image-source: initial;
      border-image-slice: initial;
      border-image-width: initial;
      border-image-outset: initial;
      border-image-repeat: initial;
      border-color: rgba(84,89,93,0.3);
      border-top-color: rgba(84, 89, 93, 0.3);
      border-right-color: rgba(84, 89, 93, 0.3);
      border-bottom-color: rgba(84, 89, 93, 0.3);
      border-left-color: rgba(84, 89, 93, 0.3);
      padding: 0.2em;
    }
    & > * > tr > th {
      background-color: ${({theme})=>theme.colors.background_light};
      color: ${({theme})=>theme.colors.text_dark};
    }

  }

  .error, .hatnote, .mbox-text-span , .mw-editsection, .mw-references-wrap{
    display: none;
  }

`;
