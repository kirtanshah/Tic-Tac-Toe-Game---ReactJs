import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      
      //board:Array(9).fill(''),
      //totalMoves:0,
      winner:undefined
    }
    this.gameState={
      turn:'X',
      gameEnded:false,
      board:Array(9).fill(''),
      totalMoves:0
    }
  }
  clicked(event){
    if(this.gameState.gameEnded){return;}
    //console.log(event.target.dataset.square);
    if(this.gameState.board[event.target.dataset.square]==''){
    this.gameState.board[event.target.dataset.square]=this.gameState.turn;
    event.target.innerText = this.gameState.turn;
    this.gameState.turn=this.gameState.turn=='X'?'0':'X';
    this.gameState.totalMoves++;
    /*this.setState({
      turn:this.state.turn=='X'?'0':'X',  
      //board:this.gameState.board
      totalMoves:this.gameState.totalMoves++
    })*/
      
    }
      //console.log(this.state.board);
      var result=this.checkWinner();
      if(result=='X'){
        this.gameState.gameEnded=true;
        this.setState({
            winner:'X',
            winnerLine:'Match won by X'

          });
        //console.log('Yeap');
        }else if(result=='0'){
          this.gameState.gameEnded=true;
          this.setState({
            winner:'0',
            winnerLine:'Match won by 0'
          });
          //console.log('Yeap');
        }else if(result =='draw'){
          this.gameState.gameEnded=true;
          this.setState({
            winner:'draw',
            winnerLine:'Match is drawn'
          });
        }
        //
      }
  checkWinner(){
    var moves=[[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]];
    var board = this.gameState.board;
    for(let i=0;i<moves.length;i++){
      if(board[moves[i][0]]==board[moves[i][1]] && board[moves[i][1]]==board[moves[i][2]]){
        return board[moves[i][0]];
      }
      
    }
    console.log(this.gameState.totalMoves);
    if(this.gameState.totalMoves==9){
        return 'draw';
      }
  }
  render() {
    return (
      <div id="game">
        <div id="head">
        <h3>World best Tic Toe</h3>
        </div>
        <div id="winnerLine">{this.state.winnerLine}</div>
        <div id="board" onClick={(e)=>this.clicked(e)}>
        <div className="square" data-square="0"></div>
        <div className="square" data-square="1"></div>
        <div className="square" data-square="2"></div>
        <div className="square" data-square="3"></div>
        <div className="square" data-square="4"></div>
        <div className="square" data-square="5"></div>
        <div className="square" data-square="6"></div>
        <div className="square" data-square="7"></div>
        <div className="square" data-square="8"></div>
        </div>
      </div>
          );
  }
}

export default App;
