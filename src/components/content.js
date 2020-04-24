import React from "react"

import style from "./content.module.css"

const Content = ({ person, dislike, like }) => {
  return (
    <dl className={style.container}>
      <dt className="visually-hidden">To</dt>
      <dd className={`${style.text} ${style.person}`}>{person}</dd>
      <dt className="visually-hidden">Message</dt>
      <dd className={`${style.text} ${style.dislike}`}>{dislike}</dd>
      <dt className="visually-hidden">From</dt>
      <dd className={`${style.text} ${style.like}`}>{like}</dd>
    </dl>
  )
}

export default Content
