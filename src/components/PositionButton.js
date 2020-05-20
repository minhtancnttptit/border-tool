import React from 'react'

const PositionButton = (props) => {
  const { name, borderStyle, borderColor, selected } = props

  const style = {
    width: '150px',
    height: '50px',
  }

  const capitalize = (s) => {
    if (typeof s !== 'string') {
      return ''
    }
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  if (name === 'All') {
    style['border'] = `5px ${borderStyle} ${borderColor}`
  } else {
    style['border' + capitalize(name)] = `5px ${borderStyle} ${borderColor}`
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

export default PositionButton
