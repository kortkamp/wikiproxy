import React from "react";
import useDarkMode from "use-dark-mode";
import DarkToggle from "../DarkToggle";
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
        <DarkToggle isDark={darkmode.value} toggle={darkmode.toggle}/>
        {language}
      </Tools>
    </Container>
  )
}