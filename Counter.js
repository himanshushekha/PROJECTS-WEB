import React,{component} from 'react'

class Counter extends component
{
    constructor(props)
    {
        super(props)
        (
            this.state=
            {
                count:0
            }
        )
    }
    incrementcount=()=>{
        this.setstate(previousstate=>({
              count:previousstate.count+1
        }
            
        ))


      
       
      

    }
}
    incrementcountfive = () =>
    {
       this.incrementcountfive ();
       this.incrementcountfive ();
       this.incrementcountfive ();
       this.incrementcountfive ();
       this.incrementcountfive ();
    }
  
       
       
       
        render()
        (



            <div>

<h1> count:{this.state.count}</h1>
<button onClick={this.incrementcount}></button>
<button onClick={this.incrementcountfive}></button>
            </div>
        
        )
            

    




