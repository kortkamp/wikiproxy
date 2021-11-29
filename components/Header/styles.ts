import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({theme})=> theme.colors.background};;
    color: ${({theme})=> theme.colors.text_dark};
    font-size: 35px;
    border-bottom: 1px solid #dfe1e5;
  
`;

export const Title = styled.div`
    a {
        color: ${({theme})=> theme.colors.text_dark};
    }
`;

export const Tools = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    gap: 20px;


`;

export const LanguageButton = styled.div`
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 10px;
    
    border: 1px solid ${({theme})=> theme.colors.text_dark};
    border-radius: 14px;
    text-transform: uppercase;
    font-size: 1.5rem;
   
`;

