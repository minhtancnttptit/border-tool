import React from 'react'

const Slider = (props) => {
  const { name, min, max, step, value } = props

  const onChangeSlider = (e) => {
    props.onChangeSlider(name, e.target.value)
  }

  return (
    <div className="slider">
      <label>{name}</label>
      <br />
      <input
        type="range"
        className={name}
        id={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChangeSlider(e)}
      />
      <br />
    </div>
  )
}

export default Slider
