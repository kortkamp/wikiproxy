import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  font: ${({theme})=>theme.font};
  color: ${(props)=>props.theme.colors.text};
  background-color: ${(props)=>props.theme.colors.shape};
  line-height: 1.5;

  .title {
    font-size: 3rem;
    padding: 10px 0px;
  }

  .contentWraper {
    padding: 20px 30px;

    border-radius: 5px
  }

  .article_content {
    position: relative;
    min-width: 0;
    max-width: 1100px;
    margin: 0 auto;
  }

`;
