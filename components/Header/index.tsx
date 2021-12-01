import Link from "next/link";
import React from "react";
import useDarkMode from "use-dark-mode";
import { useData } from "../../hooks/useData";
import DarkToggle from "../DarkToggle";
import { WikiSearch } from "../WikiSearch";
import { Container, Tools ,LanguageButton, Title} from "./styles";


interface Props {
  language: string;
  searchBar?:boolean
}

export function Header({language, searchBar=true}:Props){

  const { data } = useData();

  const darkmode = useDarkMode();

  return (
    <Container>
      <Title>
        <Link href="/" >
          
            Wikiwand
          
        </Link>
      </Title>
      <Tools>
        {/* <WikiSearch /> */}
        <DarkToggle isDark={darkmode.value} toggle={darkmode.toggle}/>
        <LanguageButton>
          {data.language}
        </LanguageButton>
      </Tools>
    </Container>
  )
}