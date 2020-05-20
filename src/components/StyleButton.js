import React from 'react'

const StyleButton = (props) => {
  const { name, borderColor, selected } = props

  const style = {
    width: '150px',
    height: '50px',
    border: `5px ${name} ${borderColor}`,
  }

  if (selected) {
    style['backgroundColor'] = '#b3bcf5'
  }

  return (
    <>
      <button style={style} onClick={() => props.onClickButton(name)}>
        {name}
      </button>
    </>
  )
}

export default StyleButton
