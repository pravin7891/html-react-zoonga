import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <React.Fragment>
            <input type={this.props.type} className="form-control" id={this.props.id} name={this.props.name} placeholder={this.props.placeholder}/>
            </React.Fragment>
         );
    }
}
 
export default Input;