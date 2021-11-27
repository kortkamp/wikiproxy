import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 200px !important;
  /* max-width: 0; */
  height: 100vh;  


  font: ${({theme})=>theme.font};
 

  background-color: ${({theme})=>theme.colors.background};
  
  z-index: 999;

  outline: none;

  max-width: 200px;

  transition: .4s;

  
  &.hide {
    max-width: 0;
    padding: 0px 13px;
  }

  a {
    color: ${({theme})=>theme.colors.text_dark};
    font-weight: 600;
  }
 
  svg#menu {
    height: 20px;
    width: 20px;
    fill: ${({theme})=>theme.colors.text_dark}
  }

`;

export const Header = styled.h1`

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 10px 0; 
  padding: 0px 26px;
  color: ${({theme})=>theme.colors.text_dark};
  font-weight: 600;
  font-size: 23px;
  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  svg {
    position: absolute;
    top: 12px;
    left: 2px;
  }
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
  border: 0;
  
  padding: 3px 26px;
  &.tocLevel1 {
    margin-top: 5px;
    font-size: 20px;
  }
  &.tocLevel2 {
    font-size: 12px;
    
    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover{
    background-color: ${({theme})=>theme.colors.shape}
  }
`;
