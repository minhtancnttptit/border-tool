import React, { Component } from 'react'
import ChooseColor from './ChooseColor'

class Preview extends Component {
  state = { backgroundColor: '#3d9df6' }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { css: nextProps.css, backgroundColor: prevState.backgroundColor }
  }

  capitalize = (s) => {
    if (typeof s !== 'string') {
      return ''
    }
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  onChangeColor = (color) => {
    this.setState({ backgroundColor: color })
  }

  render() {
    const {
      width,
      color,
      style,
      position,
      topLeft,
      topRight,
      bottomRight,
      bottomLeft,
    } = this.state.css

    const css = {
      backgroundColor: this.state.backgroundColor,
      width: '200px',
      height: '200px',
      borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
    }
    if (position === 'all') {
      css.border = `${width}px ${style} ${color}`
    } else {
      css['border' + this.capitalize(position)] = `${width}px ${style} ${color}`
    }

    return (
      <>
        <div className="ui segment">
          <h2>Preview</h2>
          <div className="row">
            <div className="column">
              <div className="preview-box" style={css} />
            </div>
            <div className="column">
              <ChooseColor
                color={this.state.backgroundColor}
                onChangeColor={this.onChangeColor}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Preview
