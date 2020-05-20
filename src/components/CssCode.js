import React from 'react'

const CssCode = ({ css }) => {
  return (
    <div className="ui segment">
      <h2>CSS code</h2>
      <div>{css[0]}</div>
      <div>{css[1]}</div>
    </div>
  )
}

export default CssCode
