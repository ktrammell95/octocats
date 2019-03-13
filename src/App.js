import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import FirstClass from './components/FirstClass'
import Colors from './components/Colors'

const names = ['KT', 'Bree', 'Jose']
const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange']

class App extends Component {
  render() {
    return (
      <div>
        {names.map(name => {
          return <HelloWorld name={name} />
        })}
        {colors.map(color => {
          return <Colors color={color} />
        })}
        <FirstClass />
      </div>
    )
  }
}

export default App
