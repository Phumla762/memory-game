import React, {Component} from 'react';   
import './App.css';
import BoardGame from './components/BoardGame';
import NewGame from './components/NewGame';
import PlayAgain from './components/PlayAgain';
import Navbar from './components/Navbar';

class App extends Component{
 state = {
   showEndGame: false,
   score: 0,
 };

 handleEndGame = (boolean) => {
   if(boolean) {
     this.setState({showEndGame: boolean, score: this.state.score + 1});
   } else {
     this.setState({showEndGame: boolean });
   }
 }
 render(){
   const {score, showEndGame} = this.state;
   return (
     <div>
     
     {showEndGame ? <PlayAgain newGame={this.handleEndGame} /> : null}
     <Navbar score={score} />
     <BoardGame endGame={this.handleEndGame} />
     <NewGame />
     
     </div>
   )
 }
}

export default App;
