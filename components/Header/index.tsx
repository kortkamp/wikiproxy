import React from "react";

import styles from './styles.module.scss'

export function Header(){

  return (
    <div className={styles.headerWraper}>
      <div>
        Wikiwand
      </div>
      <div>
        tools
      </div>
    </div>
  )
}