import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component{
    state = {
        count:0
    }

    style = {
        fontSize:15,
        fontColor:"black"
    }

    // constructor(){
    //     super();
    //     this.handleClick = this.handleClick.bind(this) // this will bind the class object to the event handler method
    // }

    render(){
        let classes = this.getClasses(); 
        return(
            // if we dont want a extra div use React.Fragment
           <React.Fragment>  
                <span style={this.style} className={classes}>
                    {this.getCount()}
                </span>
                <button 
                onClick={this.handleClick}
                className="btn btn-secondary btn-sm">Click me </button>
            </React.Fragment>
        )
    }

    handleClick = () => {
        console.log(this) // for constructor binding alternative we can use arrow function
    }

    getClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    getCount(){
    const {count} = this.state // only the count variable is got here 
    return count === 0 ? "Zero" : count;
    }
}
export default Counter;