import styled from "styled-components";

export const Container = styled.button`
    position:relative;
    height: 34px;
    width: 60px;
    padding: 0 4px;
    box-sizing: border-box;

    display:flex;
    align-items:center;
    justify-content: space-between;
  
    background-color: #111;

    border-radius: 1.7rem;
    border: none;

    -webkit-transition: .4s;
    transition: .4s;

    &>svg {
      height: 26px;

    }

    &.dark {
      background-color: #ddd;
    }

    &::before{
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      border-radius: 50%;

      background-color: white;
      transition: .4s;
      
    }
    &.dark::before {
      transform: translateX(26px);
    }
`;