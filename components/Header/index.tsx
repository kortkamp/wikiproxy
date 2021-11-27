import Link from "next/link";
import React from "react";
import useDarkMode from "use-dark-mode";
import DarkToggle from "../DarkToggle";
import { Container, Tools ,LanguageButton, Title} from "./styles";


interface Props {
  language: string;
}

export function Header({language}:Props){

  const darkmode = useDarkMode();

  return (
    <Container>
      <Title>
        <Link href="/" >
          
            Wikiwand
          
        </Link>
      </Title>
      <Tools>
        <DarkToggle isDark={darkmode.value} toggle={darkmode.toggle}/>
        <LanguageButton>
          {language}
        </LanguageButton>
      </Tools>
    </Container>
  )
}