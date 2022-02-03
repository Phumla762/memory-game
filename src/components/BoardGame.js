import React from 'react';
import Card from './Card';

// this component is to display of the cards of images. 
 
class BoardGame extends React.Component{
    render(){
        return (
            <div className="game">
            <Card endGame={this.props.endGame} />
            </div>
        );
    }
}

export default BoardGame;