import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: rgba(40,40,40,0.2);
    color: ${({theme})=> theme.colors.text_dark};
    font-size: 35px;

    
  
`;

export const Tools = styled.div`
    display: flex;
    align-items:center;


`;

