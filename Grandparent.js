import React, { Component } from 'react'
import Parent from './Parent'

 class Grandparent extends Component {
  render() {
    return (
      <div>

        <Parent/>
      </div>
    )
  }
}

export default Grandparent