
         
        
    import React,{useState} from 'react'

function HookCounter() 
{
    const[count,setCount] = useState(0);

    const incrementFive=()=>
    {
        for (let i =0;i<5;i++)
        { 
              setCount(prevState => prevState + 1)
        }
    }
  return (
    <div>

<h1>

    HOOK COUNT-{count}
</h1>
<button onClick={() => setCount(count +1)}>INCREMENT ONE</button>
<button onClick={incrementFive}>INCREMENT FIVE</button>


    </div>
  )
}

export default HookCounter