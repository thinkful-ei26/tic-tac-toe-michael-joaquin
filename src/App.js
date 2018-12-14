import React from 'react';
import './App.css';
import Square from './square';

export default class App extends React.Component{
constructor(props){
        super(props);
        this.state={
                turn: 'x',
                gameBoard:['-','-','-','-','-','-','-','-','-'],
                gameBool: false,
                winner:'cats',
                id: 0
        }
        // this. X ='https://www.bookriot.com/wp-content/uploads/2013/07/x.png';
        // this.blank = 'https://www.staples-3p.com/s7/is/image/Staples/m004542954_sc7?$std$';
        // this.circle='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/circle_-_black_simple.svg/500px-circle_-_black_simple.svg.png';

        // function binds

        this.handleChangeTurn = this.handleChangeTurn.bind(this);
        this.handleClickedSquare = this.handleClickedSquare.bind(this);
        this.handleSetGameBoard = this.handleSetGameBoard.bind(this);
        this.handleSetId = this.handleSetId.bind(this);
}


handleChangeTurn(){
        if(this.state.turn === 'x'){
          this.setState({turn:'o'})
        }else{
          this.setState({turn:'x'})
        }
}


handleSetGameBoard(newId){
   const tempArr = [...this.state.gameBoard];
   tempArr[newId] = this.state.turn.toString();
   this.setState({gameBoard: [...tempArr]},this.handleChangeTurn());
}

handleSetId(newId){
        this.setState({id: newId},this.handleSetGameBoard(newId));
}
handleClickedSquare(id){
        // handle changing the img to the players img on the correct square
        // change turns
        // update state                
        // function to check if someone won
        this.handleSetId(id)
        console.log(this.state.turn);

}

calculateWinner() {
        const squares = this.state.gameBoard;
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          console.log(squares[a]);
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }


render(){
return(
<div className='gameBoard' action="">
    <div id='row1'>
        <Square class='top' handleClickedSquare={this.handleClickedSquare} id={0} current={this.state.gameBoard[0]}/>
        <Square class='topMid' handleClickedSquare={this.handleClickedSquare} id={1} current={this.state.gameBoard[1]}/>
        <Square class='top' handleClickedSquare={this.handleClickedSquare} id={2} current={this.state.gameBoard[2]}/>
</div>
<div id='row2'>
        <Square class='top' handleClickedSquare={this.handleClickedSquare} id={3} current={this.state.gameBoard[3]}/>
        <Square class='topMid' handleClickedSquare={this.handleClickedSquare} id={4} current={this.state.gameBoard[4]}/>
        <Square class='top' handleClickedSquare={this.handleClickedSquare} id={5} current={this.state.gameBoard[5]}/>
</div>
<div id='row3'>
        <Square handleClickedSquare={this.handleClickedSquare} id={6} current={this.state.gameBoard[6]}/>
        <Square class='bottomMid' handleClickedSquare={this.handleClickedSquare} id={7} current={this.state.gameBoard[7]}/>
        <Square handleClickedSquare={this.handleClickedSquare} id={8} current={this.state.gameBoard[8]}/>
</div>
 
</div>

)
};
}


// {/* <div id='row2'>
//          {/* <input type= "image" id=" " onClick={this.handleChangeTurn} src={this.blank} />
//        <input type= "image" id=" " onClick={this.handleChangeTurn} src={this.blank} />
//          <input type= "image" id=" " onClick={this.handleChangeTurn} src={this.blank} /> */}
//            <a className='midLeft' onClick={this.handleClickedSquare(3)} >{this.state.gameBoard[3]}</a>
//           <a onClick={this.handleClickedSquare(4)} >{this.state.gameBoard[4]}</a>
//           <a className='midRight' onClick={this.handleClickedSquare(5)} >{this.state.gameBoard[5]}</a>
// </div>
//  <div id='row3'>
//         {/* <input type= "image" id=" " onClick={this.handleChangeTurn} src={this.blank} />
//         <input type= "image" id=" " onClick={this.handleChangeTurn} src={this.blank} />
//         <input type= "image" id=" " onClick={this.handleChangeTurn} src={this.blank} /> */}
//           <a onClick={this.handleClickedSquare(6)} >{this.state.gameBoard[6]}</a>
//            <a className='bottomMid' onClick={this.handleClickedSquare(7)} >{this.state.gameBoard[7]}</a>
//           <a onClick={this.handleClickedSquare(8)} >{this.state.gameBoard[8]}</a>
//  </div> */}