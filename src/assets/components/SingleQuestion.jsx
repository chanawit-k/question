import React, { useState } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
const SingleQuestion = ({ id, title, info, toggleAwsner, isActiveId }) => {
  //   const [isShow, setIsShow] = useState(false)
  const isActive = isActiveId === id
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => {
            toggleAwsner(id)
          }}
        >
          {isActive ? (
            <BiMinus style={{ width: '1em' }} />
          ) : (
            <BiPlus style={{ width: '1em' }} />
          )}
        </button>
      </header>
      {isActive ? <p>{info}</p> : ''}
    </article>
  )
}

export default SingleQuestion
