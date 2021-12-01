import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 0 auto;

  background-color: ${(props)=> props.theme.colors.background};
  

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
  padding: 0 30px;
  font-family: Helvetica, sans-serif;

  & > h1 , p {
    text-align: center;
    z-index: 1;
  }

  
`;


export const FloatingBetween = styled.div`
  height: 0;
  transform: translateY(-18px);
  z-index: 10;
  & > *{
    height: 40px;
    width: 400px;
  }
`;

export const WikiBanner = styled.div`
  position: relative;
  width: 100%;
  /* height: 500px; */

  display: flex;
  flex-direction: column;

 
  /* overflow: hidden; */


`;


export const BannerItem = styled.div`
  /* position: absolute; */
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 20px 40px;
  height: 100%;
  width: 100%;

  background-color: white;
  overflow: hidden;

  &.inverse {
    flex-direction: row-reverse;
    h1 {
      text-align: end;
    }
  }

  
`;
export const BannerAside = styled.div`
  position: relative;
  flex: 1;

 
  text-align: center;
`;
export const BannerText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 0 60px; */
  & > p{
    margin-top: 10px;
    width: 300px;
    text-align: justify;
  }

  @media (max-width: 720px){
    & > p{
      margin-top: 10px;
      width: 250px;
      text-align: justify;
    }

  }

`;