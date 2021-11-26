import styled from 'styled-components';

export const Container = styled.div`
  &.title {
    font-size: 40px;
    padding: 10px 20px;
  }

  margin-left: 240px;

  font: ${({theme})=>theme.font};
  color: ${(props)=>props.theme.colors.text};
  background-color: ${(props)=>props.theme.colors.shape};


  /* font-family: Verdana, Geneva, Tahoma, sans-serif; */


  line-height: 1.5;
  // background-color: ;
  /* z-index: 1000; */

`;
