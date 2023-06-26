import React, {Component} from 'react'


class  Welcome extends Component
{
    render()
    {
        return(
            <>
            <h1>CLASS COMPONENT</h1>
               <h3>{this.props.name}</h3>
      
        </>
        )
       
    }
}
export default Welcome;