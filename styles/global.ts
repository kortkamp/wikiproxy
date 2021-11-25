import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  html,
  body {
    
    font-size: 100%;
    font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Lato','Helvetica','Arial',sans-serif;
    line-height: 1.4;

    background-color: #ffffff;
    color: #202122;
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

  .error, .hatnote, .mbox-text-span {
    display: none;
  }

`
