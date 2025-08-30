import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component{
    state = {
        count:0,
        tags: ["tag1","tag2","tag3","tag4"]
    }

    style = {
        fontSize:15,
        fontColor:"black"
    }
    render(){

        let classes = this.getClasses(); 

        return(
            // if we dont want a extra div use React.Fragment
            <React.Fragment>  
                <span style={this.style} className={classes}>
                    {this.getCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Click me </button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        )
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