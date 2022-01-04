import React from 'react';
import Images from './Images';

// this component is to display of the cards of images. 

export class BoardGame extends React.Component{
    render(){
        return (
            <div className="game">
            <Images endGame={this.props.endGame} />
            </div>
        );
    }
}

export default BoardGame;