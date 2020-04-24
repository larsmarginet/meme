
import React, { useState } from "react"
import style from "./form.module.css"

const Form = () => {
  const [person, setPerson] = useState(null)

  return (
    <form method="POST" action="/post" className={style.form}>
      <label htmlFor="person" className={style.wrapper}>
        <span className={style.label}>Persoon:</span>
        <input
          type="text"
          id="person"
          name="person"
          onChange={e => setPerson(e.currentTarget.value)}
          value={person}
          className={style.text}
        />
      </label>
      <label htmlFor="dislike" className={style.wrapper}>
        <span className={style.label}>Wat vindt {person} niet leuk?</span>
        <input
          type="text"
          id="dislike"
          name="dislike"
          className={style.text}
        />
      </label>
      <label htmlFor="like" className={style.wrapper}>
        <span className={style.label}>Wat vindt {person} leuk?</span>
        <input
          type="text"
          id="like"
          name="like"
          className={style.text}
        />
      </label>
      <input
        type="submit"
        value="Genereer de meme"
        className={style.button}
      />
    </form>
  )
}

export default Form
