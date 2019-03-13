import React, { Component } from 'react'

class Colors extends Component {
  render() {
    console.log(this.props)
    {
      if (this.props.color === 'pink') {
        return <h2>The color is {this.props.color}</h2>
      } else if (this.props.color === 'blue') {
        return <h2>Yay {this.props.color}</h2>
      } else if (this.props.color === 'green') {
        return <h2>Go {this.props.color}!</h2>
      } else {
        return <h2>{this.props.color}</h2>
      }
    }
    return <h2>Color: {this.props.color}</h2>
  }
}

export default Colors
