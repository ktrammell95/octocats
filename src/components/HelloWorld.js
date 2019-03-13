import React, { Component } from 'react'

class HelloWorld extends Component {
  render() {
    console.log(this.props)
    {
      if (this.props.name === 'Bree') {
        return <h1>{this.props.name} is ok</h1>
      } else if (this.props.name === 'KT') {
        return <h1>{this.props.name} is the best!</h1>
      } else if (this.props.name === 'Liz') {
        return <h1>{this.props.name} is the teacher!</h1>
      } else {
        return <h1>{this.props.name} is the dude!</h1>
      }
    }
    return <h1>Hello {this.props.name},</h1>
  }
}

export default HelloWorld
