import React, { Component } from 'react'
import Slider from './Slider'
import ChooseColor from './ChooseColor'
import StyleButton from './StyleButton'
import PositionButton from './PositionButton'

class ConfigBorder extends Component {
  state = {
    width: 5,
    color: '#1C6EA4',
    style: 'solid',
    position: 'all',
    allCorners: 0,
    topLeft: 0,
    topRight: 0,
    bottomRight: 0,
    bottomLeft: 0,
  }

  static getDerivedStateFromProps(nextProps) {
    return nextProps.state
  }

  styles = [
    'solid',
    'dotted',
    'dashed',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
  ]
  positions = ['All', 'Top', 'Right', 'Bottom', 'Left']
  borderRadius = [
    'allCorners',
    'topLeft',
    'topRight',
    'bottomRight',
    'bottomLeft',
  ]

  render() {
    const {
      width,
      color,
      style,
      position,
      allCorners,
      topLeft,
      topRight,
      bottomRight,
      bottomLeft,
    } = this.state

    return (
      <div className="ui segment">
        <h2>Config custom border</h2>
        <br />
        <Slider
          name="width"
          min={1}
          max={30}
          step={1}
          value={width}
          onChangeSlider={this.props.onChangeSlider}
        />
        <br />
        <label>Color</label>
        <br />
        <ChooseColor color={color} onChangeColor={this.props.onChangeColor} />
        <br />
        <label>Style</label>
        <br />
        {this.styles.map((item, index) => {
          return (
            <StyleButton
              key={index}
              name={item}
              borderColor={color}
              selected={item === style}
              onClickButton={this.props.onClickStyleButton}
            />
          )
        })}
        <br />
        <label>Position</label>
        <br />
        {this.positions.map((item, index) => {
          return (
            <PositionButton
              key={index}
              name={item}
              borderStyle={style}
              borderColor={color}
              selected={item.toLowerCase() === position}
              onClickButton={this.props.onClickPositionButton}
            />
          )
        })}
        <br />
        <label>Border Radius</label>
        <br />
        {this.borderRadius.map((item, index) => {
          return (
            <Slider
              key={index}
              name={item}
              min={0}
              max={200}
              step={1}
              value={this.state[item]}
              onChangeSlider={this.props.onChangeSlider}
            />
          )
        })}
      </div>
    )
  }
}

export default ConfigBorder
