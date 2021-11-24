import React from "react";

import styles from './styles.module.scss'

interface Props {
  language: string;
}

export function Header({language}:Props){

  return (
    <div className={styles.headerWraper}>
      <div>
        Wikiwand
      </div>
      <div>
        {language}
      </div>
    </div>
  )
}