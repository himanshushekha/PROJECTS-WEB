import React, { Component } from 'react'

export class ClassConditional extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
         LoggedIn:true
      }
    }
  render() {

    return (
      
      this.state.LoggedIn ?<h1>WELCOME TO HIMANSHU</h1>:
        <h2>welcome to guest</h2>
      
    )
  }
}

export default ClassConditional
