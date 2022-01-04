import React from 'react';
import { messages } from './Messages';

class PlayAgain extends React.Component{
    
    handleClick = () => {
        this.props.newGame(false);
    };
    render(){
        messages.sort(() => Math.random() - 0.5);
        return (
            <div className="end-game">
            <div className="message">
            <h2>{messages[0].title}</h2>
            <p>{messages[1].message}</p>
            <button className="btn btn-primary" onClick={this.handleClick}>
            Play again
            </button>
            </div>
            </div>
        );
    }
}

export default PlayAgain;


//this component consists of the necessary code to display when the gsme ends or should progress.