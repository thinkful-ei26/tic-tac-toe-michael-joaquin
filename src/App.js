import React from 'react';
import './App.css';


export default class App extends React.Component{
constructor(props){
        super(props);
        this.state={
                turn: 'x',
                gameBoard:['','','','','','','','',''],
        }
this. X ='https://www.bookriot.com/wp-content/uploads/2013/07/x.png';
this.blank = 'https://www.staples-3p.com/s7/is/image/Staples/m004542954_sc7?$std$';
this.circle='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/circle_-_black_simple.svg/500px-circle_-_black_simple.svg.png';
}





render(){
return(
<form className='gameBoard' action="">
    <div id='row1'>
        <input type= "image" id=" " onclick=" " src={this.blank} />
        <input type= "image" id=" " onclick=" " src={this.blank} />
        <input type= "image" id=" " onclick=" " src={this.blank} />
</div>
<div id='row2'>
        <input type= "image" id=" " onclick=" " src={this.blank} />
        <input type= "image" id=" " onclick=" " src={this.blank} />
        <input type= "image" id=" " onclick=" " src={this.blank} />
</div>
<div id='row3'>
        <input type= "image" id=" " onclick=" " src={this.blank} />
        <input type= "image" id=" " onclick=" " src={this.blank} />
        <input type= "image" id=" " onclick=" " src={this.blank} />
</div>
</form>

)
};
}