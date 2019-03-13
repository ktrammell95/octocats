import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'
// import FirstClass from './components/FirstClass'
// import Colors from './components/Colors'
import Header from './components/Header'
import Octocats from './components/Octocats'

// const names = ['KT', 'Bree', 'Jose']
// // const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange']

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Octocats />
      </div>
    )
  }
}

export default App
