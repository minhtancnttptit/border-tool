import React, { Component } from 'react'
import './style.css'
import ConfigBorder from './ConfigBorder'
import Preview from './Preview'
import CssCode from './CssCode'

class App extends Component {
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

  onChangeSlider = (name, value) => {
    if (name !== 'allCorners') {
      this.setState({ [name]: value })
    } else {
      this.setState({
        [name]: value,
        topLeft: value,
        topRight: value,
        bottomRight: value,
        bottomLeft: value,
      })
    }
  }

  onChangeColor = (color) => {
    this.setState({ color: color })
  }

  onClickStyleButton = (name) => {
    this.setState({ style: name })
  }

  onClickPositionButton = (name) => {
    this.setState({ position: name.toLowerCase() })
  }

  getCssCode = () => {
    const {
      width,
      color,
      style,
      position,
      topLeft,
      topRight,
      bottomRight,
      bottomLeft,
    } = this.state
    let result = []
    if (position === 'all') {
      result.push(`boder: ${width}px ${style} ${color}`)
    } else {
      result.push(`boder-${position}: ${width}px ${style} ${color}`)
    }
    result.push(
      `border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
    )

    return result
  }

  render() {
    return (
      <div className="app ui segment">
        <div className="row">
          <div className="column">
            <ConfigBorder
              state={this.state}
              onChangeSlider={this.onChangeSlider}
              onChangeColor={this.onChangeColor}
              onClickStyleButton={this.onClickStyleButton}
              onClickPositionButton={this.onClickPositionButton}
            />
          </div>
          <div className="column">
            <Preview css={this.state} />
            <CssCode css={this.getCssCode()} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
