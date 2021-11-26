import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  html,
  body {
    
    font-size: 100%;
    /* font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Lato','Helvetica','Arial',sans-serif; */
    line-height: 1.4;

  
    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .light a {
    color: #1559b5;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
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

  .in-block {
    /* font-size: 1.6em;
    padding: 20px 0; */
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
    position: relative;
    border: 1px solid #eaecf0;
    background-color: #f8f9fa;
  }

  .contentWraper {
    padding: 10px 20px;
    margin: 0 auto;
    max-width: 1100px;
  }

  .mw-references-wrap {
    display: none;
  }

  .error, .hatnote, .mbox-text-span , .mw-editsection{
    display: none;
  }

`
