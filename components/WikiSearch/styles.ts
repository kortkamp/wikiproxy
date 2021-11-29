import styled from "styled-components";

export const Container = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* border: 1px solid ; */
  border-radius: 20px;
  user-select: none;

  background-color: white;

  box-shadow: 0 0 3px black;

  &:hover {
    box-shadow: 0 0 4px black;
  }

  input {
    padding: 0 20px;
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    outline: none;
    
  }
  svg {
    width: 26px;
    height: 26px;
    margin-right: 10px;
    cursor: pointer;
  }
`;