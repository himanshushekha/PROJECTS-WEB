





import React, { Component } from 'react'
import child from './child'
import userconText from './ContextApi'


 class Parent extends Component {
  static contextType =  userconText
  render() {
    return (
      <>
        <h1>parent - {this.context}</h1>
        <child/>
      </>
    )
  }
}

export default Parent