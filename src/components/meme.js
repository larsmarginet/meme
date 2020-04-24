import React from "react"
import style from "./meme.module.css"

const Meme = () => {
  return (
   <img className={style.meme} src={`../template.jpg`} alt="meme template" width="800" height="450"/>
  )
}

export default Meme
