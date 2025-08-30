import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component{
    state = { //state is a keyword
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
                onClick={this.handleClick} // calling this function like this.handleClick() , wont work , bez this mean we are just passing the result of the method
                className="btn btn-secondary btn-sm">Click me </button>
            </React.Fragment>
        )
    }

    handleClick = () => {
       this.setState({count:this.state.count+1})
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