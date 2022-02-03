import React from 'react';
import { help } from './HelpMessages';

class Help extends React.Component{
    state = {};

    handleChange = (e) => {
        this.setState({help: e.target.value});
    }

    handleHelpClick = (e) => {
        e.preventDefault();
        this.props.help(this.state.help, false);
    }

    render(){
        return(
            <div className="container">
            <h2>{help[0].title}</h2>
            <p>{help[1].message}</p>
            <button
            onClick={this.handleHelpClick}
            className="btn btn-primary">
            Help
            </button>
            </div>
            
        )
    }
}
