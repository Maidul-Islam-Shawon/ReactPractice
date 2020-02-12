import React, {useState} from "react";

function Test(){

    var val=0;
    const numberGenerate = () =>{
        val = Math.random(2);
    }
    

    return(
        <div>
            <h1>Test Component</h1>
            <button onClick={numberGenerate}>Click</button>
            <div>{val}</div>
        </div>
    );
}

export default Test;