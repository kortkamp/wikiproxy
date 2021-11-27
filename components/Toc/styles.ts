import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  max-width: 200px;
  height: 100vh;  

  font: ${({theme})=>theme.font};
  background-color: ${({theme})=>theme.colors.background};
  outline: none;
  
  z-index: 999;
  transition: .4s;
  
  &.hide {
    max-width: 0;
    padding: 0px 0px;
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


 
  margin: 10px 26px;

  color: ${({theme})=>theme.colors.text_dark};
  font-weight: 600;
  font-size: 23px;
  
  overflow: hidden;


  svg {
    position: absolute;
    top: 0.8rem;
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
  width: 200px !important;
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
