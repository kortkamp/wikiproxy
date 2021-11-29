import styled from "styled-components";

export const Container = styled.div`
  
  width: 100%;
  overflow: hidden;
  height: 500px;
  
`;

export const List = styled.ul`

  display:flex;
  flex-direction: column;
  flex-wrap:wrap;
  height: 500px;
  cursor: move;
`;

export const FeaturedItem = styled.li`
  width: 250px;
  height: 250px;
  background-size: cover;
  overflow: hidden;

  &:hover{
    div::before{
      transform: rotate(7deg);
    }
    &>div.bg {
      transform: scale(1.1);
    }
    .info {
      transform: translateY(-100%);
      color: ${({theme})=>theme.colors.text};
    }
    span{
      filter: opacity(1);
    }
    i {
      filter: opacity(0.5s);
      transform: translateY(0);
    }
  }


`;

export const Background = styled.div`
  width: 250px;
  height: 250px;
  background-size: cover;

  transition: transform 2s;
`;

export const CardInfo = styled.div`
  position: relative;
  width: 250px;
  height: 70px;
  padding: 0 10px;
  
  /* background-color: ${({theme})=>theme.colors.shape}; */
  color: ${({theme})=>theme.colors.shape};
  font-family: Lora,serif;
  font-size: 20px;
  cursor: pointer;

  transition: transform 0.4s;

  span {
    display: flex;
    flex-direction: column;
    position:relative;
    font-size: 20px;
    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;
    
    filter: opacity(0);
    transition: filter 0.4s;
    transition-delay: 0.2s;
    i {
      font-size: 15px;
      
      transform: translateY(30px);
      transition: all 0.3s;
      transition-delay: 0.3s
    }
  }

  &::before{
    content:'';
    position: absolute;
    top: 0%;
    left: -10%;
    width: 120%;
    height: 160%;

    /* outline: 1px solid transparent; */
    background-color: ${({theme})=>theme.colors.shape};
    transform: rotate(-2deg);
    transform-origin: right;
    transition: all .3s cubic-bezier(.6,.1,.3,.8);
  }

`;