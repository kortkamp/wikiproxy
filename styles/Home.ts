import styled from "styled-components";

export const Container = styled.div`
 

`;

export const Content = styled.div`  
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.filled {
    margin-top: 30px;
  }
`;

export const SearchResult = styled.div`
  margin-top: 20px;
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