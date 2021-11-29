import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  overflow: hidden;
  z-index: 0;
`;  


interface FloatingTagProps {
  random: number;
  from: {
    x: number,
    y: number,
  }
  to: {
    x: number,
    y: number,
  }
}

function animationFloat(props:FloatingTagProps){
  return  keyframes` 
   100% {left:  ${props.to.x}%; top: ${props.to.y}%}
  `;
}
export const FloatingTag = styled.span<FloatingTagProps>`
  position: absolute;
  left: ${props=>props.from.x}%;
  top: ${props=>props.from.y}%;
  user-select: none;
  white-space: nowrap;

  color: ${({theme})=>theme.colors.text};
  filter: opacity(0.07);

  animation-name: ${props => animationFloat(props)};
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
  animation-delay: ${props=>-props.random * 30}s;
`;

