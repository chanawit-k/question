import React, { useState } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
const SingleQuestion = ({ title, info }) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => {
            setIsShow(!isShow)
          }}
        >
          {isShow ? (
            <BiMinus style={{ width: '1em' }} />
          ) : (
            <BiPlus style={{ width: '1em' }} />
          )}
        </button>
      </header>
      {isShow ? <p>{info}</p> : ''}
    </article>
  )
}

export default SingleQuestion
