import React from 'react';   
import BoardGame from './BoardGame';
import NewGame from './NewGame';
import PlayAgain from './PlayAgain';
import Navbar from './Navbar';
import Help from './Help';



// this component has a class and so it can have a state and be used for many functions too.
class Focal extends React.Component{
 state = {
   showNewGame: true,
   showPlayAgain: false,
   showHelp: false,
   name: "",
   score: 0,
 };

 handleNewGame = (name, boolean) => {
   this.setState({ name: name, showNewGame: boolean});
 };

 handlePlayAgain = (boolean) => {
   if(boolean) {
     this.setState({showPlayGame: boolean, score: this.state.score + 1});
   } else {
     this.setState({showPlayGame: boolean });
   } 
 }

 handleClickHelp = (boolean) => {
     this.setState({showHelp: boolean})
   }
   
 render(){
   const {score, name, showPlayAgain, showNewGame, showHelp} = this.state;
   return (
     <div>
     {showPlayAgain ?  <PlayAgain name={this.handlePlayAgain}/> :null}
     {showNewGame ? <NewGame newGame={this.handleNewGame}/> : null}
     {showHelp ? <Help name={this.handleClickHelp}/> : null}
     <Navbar name={name} score={score} />
     <BoardGame endGame={this.handleEndGame} />
     </div>
   );
 }
}

export default Focal;