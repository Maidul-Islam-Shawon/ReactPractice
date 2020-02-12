import React, {useState} from "react";
import Tweet from "./Tweet";
import Test from "./Test";
import counter from "./counter";



function App(){
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () =>{
      setCount(count + 1);
  };

  return(
   <div className='App'>

    <Test/>

     <br/><br/>
      <Tweet name="Snow White" message="i am white like a snow" likes="123"/>
      <Tweet name="John Snow" message="Winter is coming!" likes="344"/>
      <Tweet name="Ariya Start" message="Killing is my hobby" likes="543"/>
      <Tweet name="Dumbledore" message="Antar manta jantar chuu" likes="755"/>


      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>





   </div>

  )
}

export default App;