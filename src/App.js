import React from 'react';
import './App.css';
import Square from './square';

export default class App extends React.Component{
constructor(props){
        super(props);
        this.state={
                turn: 'x',
                gameBoard:['x','x','x','x','x','x','x','x','x'],
                gameBool: false,
                winner:'cats'
        }
        // this. X ='https://www.bookriot.com/wp-content/uploads/2013/07/x.png';
        // this.blank = 'https://www.staples-3p.com/s7/is/image/Staples/m004542954_sc7?$std$';
        // this.circle='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/circle_-_black_simple.svg/500px-circle_-_black_simple.svg.png';

        // function binds

        this.handleChangeTurn = this.handleChangeTurn.bind(this);
        this.handleClickedSquare = this.handleClickedSquare.bind(this);
        this.handleSetGameBoard = this.handleSetGameBoard.bind(this);
}


handleChangeTurn(){
        if(this.state.turn === 'x'){
          this.setState({turn:'o'})
        }else{
          this.setState({turn:'x'})
        }
}
handleSetGameBoard(id){
   const tempArr = [...this.state.gameBoard];
   tempArr[id] = this.state.turn;
   console.log(this.state.gameBoard);
   console.log(tempArr);
   this.setState({gameBoard: [...tempArr]});
}

handleClickedSquare(id){
        // handle changing the img to the players img on the correct square
        // change turns
        // update state                
        // function to check if someone won
        this.handleSetGameBoard(id);
        this.handleChangeTurn();
        console.log(this.state.turn);

}


render(){
return(
<div className='gameBoard' action="">
    <div id='row1'>
        {/* <input type= "image" id=" " onClick={e => this.handleChangeTurn(e)} onSubmit={e=> e.preventDefault()} src={this.blank} />
        <input type= "image" id=" " onClick={this.handleChangeTurn} src={this.blank} />
        <input type= "image" id=" " onClick={this.handleChangeTurn} src={this.blank} /> */}
        <Square handleClickedSquare={this.handleClickedSquare} current={this.state.gameBoard[0]}/>
        <Square class='topMid' handleClickedSquare={this.handleClickedSquare} current={this.state.gameBoard[1]}/>
        <Square handleClickedSquare={this.handleClickedSquare} current={this.state.gameBoard[2]}/>
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