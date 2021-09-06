import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            count:0
        }
    }

    increment() {
        this.setState({count:this.state.count + 1})
    }
    decrement() {
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