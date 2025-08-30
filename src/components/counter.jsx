import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component{
    state = {
        tags: ["tag1","tag2","tag3","tag4"]
    }
    render(){

        let classes = this.getClasses(); 

        return(
            // if we dont want a extra div use React.Fragment
            <React.Fragment>  
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        )
    }
}
export default Counter;