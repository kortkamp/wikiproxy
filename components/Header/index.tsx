import React from "react";
import useDarkMode from "use-dark-mode";
import { Container, Tools , ThemeButton} from "./styles";


interface Props {
  language: string;
}

export function Header({language}:Props){

  const darkmode = useDarkMode();

  return (
    <Container>
      <div>
        Wikiwand
      </div>
      <Tools>
        <ThemeButton onClick={darkmode.toggle}></ThemeButton>
        {language}
      </Tools>
    </Container>
  )
}