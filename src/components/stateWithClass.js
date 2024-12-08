import React from "react";

class IncrementCounterClass extends React.Component
{
    constructor()
    {
        super();
        this.state = { count : 0}
        // second way without using arrow function
        // this.Counter=this.Counter.bind(this)
    }

    //one way without declaring function keyword using arrow function

    Counter =()=>
    {
        this.setState({count:this.state.count+1})
    }
3
    // second way without using arrow function
    // Counter(){
    //     this.setState({count:this.state.count+1})
    //     //look constructor changes
    // }



    render()
    {
        return(
            <div>
                <h1> Class Count :{this.state.count}</h1>
                <button onClick={this.Counter}>Increment Button</button>
            </div>
        )
    }
}
export default IncrementCounterClass