import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            count:0
        }
    }

    function increment() {
    }
    function decrement() {
    }    
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