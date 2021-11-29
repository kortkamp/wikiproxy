import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 0 auto;
  

  `;

export const Content = styled.div`  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.filled {
    margin-top: 30px;
  }
`;

export const SearchResult = styled.div`

  max-width: 800px;
  padding-top: 100px; 
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center
`;

export const SearchItem = styled.div`
  max-width: 700px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;

  

  background-color: ${({theme})=>theme.colors.shape};
  color: ${({theme})=>theme.colors.text};


`;

export const Title = styled.span`
  cursor: pointer;

  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${({theme})=>theme.colors.link};
  }
  span {
    font-size: 0.8rem;
  }
`;

export const Snippet = styled.div`

`;

export const WikiView = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight:200;
  color: ${({theme})=>theme.colors.text_dark};

  & > * {
    text-align: center;
    z-index: 1;
  }
`;