import React from "react";
import { Container } from "./styles";

import styles from './styles.module.scss'

interface Props {
  language: string;
}

export function Header({language}:Props){

  return (
    <Container>
      <div>
        Wikiwand
      </div>
      <div>
        {language}
      </div>
    </Container>
  )
}