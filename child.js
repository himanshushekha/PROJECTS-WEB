import React, { Component } from 'react'
import { UserConsumer } from './ContextApi'


 class child extends Component {
  render() {
    return (
     <UserConsumer>
{
    user =>{
        return(
            <h1> hello{user}</h1>
        )
    }
}

     </UserConsumer>
    )
  }
}