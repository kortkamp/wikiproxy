import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 200px !important;
  height: 100vh;
  height: 100%;  
 

  background-color: rgb(36, 34, 34);
  color: #aaa;
  z-index: 999;

  outline: none;
  backface-visibility: hidden;
  & > h1 {
   
  }

`;

export const Header = styled.h1`
  color: #ddd;
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
    padding-left: 20px;
    margin-bottom: 5px;
    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
