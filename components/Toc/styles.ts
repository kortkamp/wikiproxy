import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 200px !important;
  /* max-width: 0; */
  height: 100vh;  
  padding-left: 0px;

  font: ${({theme})=>theme.font};
 

  background-color: ${({theme})=>theme.colors.background};
  
  z-index: 999;

  outline: none;
  a {
    color: ${({theme})=>theme.colors.text_dark};
    font-weight: 600;
  }
 

`;

export const Header = styled.h1`
  margin: 10px 0; 
  color: ${({theme})=>theme.colors.text_dark};
  font-weight: 600;
  font-size: 23px;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TocList = styled.ul`
  overflow-y:scroll;
  max-height: 100%;
  list-style-type: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TocItem = styled.li`

  &.tocLevel1 {
    margin-top: 5px;
    font-size: 20px;
  }
  &.tocLevel2 {
    font-size: 12px;
    /* padding-left: 20px; */
    margin-bottom: 5px;
    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
