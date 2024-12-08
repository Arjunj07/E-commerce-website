import React from "react";

const IncrementCounter =()=>
{
    let count =0;

    function Counter()
    {
        count=count+1;
        console.log(count);
    }
    return (
        <div>
            <h1> Funcn Count : { count} </h1>
            <button onClick={ Counter}>Increment</button>
        </div>
    );
}

export default IncrementCounter;