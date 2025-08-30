import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

class Counter extends Component{
    state = {
        tags: ["tag1","tag2","tag3","tag4"]
    }

    renderTags(){
        if(this.state.tags.length == 0){
            return "There are no tags"
        }else{
            return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
        }
    }
    render(){
        return(
            // if we dont want a extra div use React.Fragment
            <React.Fragment>  
                {this.state.tags.length == 0 && "Please create new tag!!!"}
                {this.renderTags()}
            </React.Fragment>
        )
    }
}
export default Counter;