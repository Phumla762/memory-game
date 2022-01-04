import React, { Component } from 'react';
// set state of this component to be visible incase i wnat it to change overtime.
// when the button is clicked (handleClick) will make this specific component ot be visible and go ot the next component of the game.
//at the beginning of the game the begin button to start game. 

export class NewGame extends Component {
state = {
    visible : true,
}

handleClick = (e) => {
    this.setState({visible: !this.state.visible}, () => {
        this.props.play(true);
    });
};

render(){
    const {visible} = this.state;
    return (
        <div className="menu-item">
            <button
            className="btn btn-play"
            onClick={this.handleClick}
            style={{visibility: visible ? "visible" : "hidden"}} >
                Begin
            </button>
        </div>
    );
}
}



export default NewGame;
