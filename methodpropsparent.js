import React,{component} from 'react'
import methodpropschild from './methodpropschild'


class  methodpropsparent extends component
{
constructor(props) {
  super(props)

  this.state = {
     parentname:'gautam kumar'
  }
}

greetparent=child =>
{
    alert(`hello ${this.state.parentname} from ${child}`)
}
render()
{
    return(
        <div>
            <methodpropschild data={this.greetparent}/>
        </div>
    )
}
}
export default methodpropsparent;