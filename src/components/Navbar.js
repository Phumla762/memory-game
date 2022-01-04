import React from 'react';

class Navbar extends React.Component{
    render(){
        const {score} = this.props;
        return (
            <div className="navbar">
            <div className="game-title">Memory</div>
            <div className="score">Score: {score} </div>
            </div>
        );
    }
}

export default Navbar;