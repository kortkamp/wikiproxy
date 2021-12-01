import styled from 'styled-components';

export const Heading = styled.h1`
  text-align: center;
  color: ${({theme})=>theme.colors.text_dark}
`;

export const Content = styled.div`
  overflow-y: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 80%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: ${({theme})=>theme.colors.text_dark}
`
