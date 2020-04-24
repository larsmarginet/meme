import React from "react"

import style from "./content.module.css"

const Content = ({ person, dislike, like }) => {
  return (
    <dl className={style.container}>
      <dt className="visually-hidden">To</dt>
      <dd className={style.to}>{person}</dd>
      <dt className="visually-hidden">Message</dt>
      <dd className={style.message}>{dislike}</dd>
      <dt className="visually-hidden">From</dt>
      <dd className={style.from}>{like}</dd>
    </dl>
  )
}

export default Content
