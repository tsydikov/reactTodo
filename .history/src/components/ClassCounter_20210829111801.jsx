import React from "react";

class ClassComponent extends React.Component {


    render() {
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={increment} >Increment</button>
                <button onClick={decrement} >decrement</button>
            </div>
        ) 
        
    }
}