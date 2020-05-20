import React, { Component } from 'react'
import { SketchPicker } from 'react-color'

class ChooseColor extends Component {
  state = { hidden: true }

  onClickButton = () => {
    this.setState({ hidden: !this.state.hidden })
  }

  onChangeColor = (color) => {
    this.props.onChangeColor(color.hex)
  }

  render() {
    const { color } = this.props
    const style = {
      backgroundColor: color,
      width: 50,
      height: 25,
    }

    return (
      <>
        <button style={style} onClick={this.onClickButton} />
        {this.state.hidden ? null : (
          <SketchPicker
            color={color}
            onChange={(color) => this.onChangeColor(color)}
          />
        )}
      </>
    )
  }
}

export default ChooseColor
