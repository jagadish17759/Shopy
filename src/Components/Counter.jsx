import React,{useReducer} from 'react'
import "../Styles/fake.css"
const Counter = () => {
  function reducer(state,action){
    switch(action){
      case "increment": return state + 1;
      case "decrement": return state - 1;
      case "reset": return 0;
      default: return state;
    }
  }
  let [count,dispatch] = useReducer(reducer,0);
  
    
  return (
    <div id='dd'> 
      
      
      <button onClick = {() => dispatch("increment")} style={{backgroundColor:"green", padding:"10px"}}>+</button>
      <h1 style={{marginLeft:"15px"}}>{count}</h1>
      <button onClick = {() => dispatch("decrement")} style={{backgroundColor:"green", padding:"10px" }}>_</button>
      <br />
      <button onClick = {() => dispatch("reset")} style={{backgroundColor:"red", padding:"10px" }}>Reset</button>
    </div>
  )
}

export default Counter

