import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 5px;

  display: flex;
  flex-direction: row;



  font: ${({theme})=>theme.font};
  color: ${(props)=>props.theme.colors.text};
  background-color: ${(props)=>props.theme.colors.shape};
  line-height: 1.5;

  &.title {
    font-size: 40px;
    padding: 10px 20px;
  }

`;
