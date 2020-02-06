import React from 'react';
import Square from './Square';


class Board extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            squares:Array(9).fill(null),
            isXNext: true   //轮流点击
        };
    }

    handleClick = (index) =>{
        const squares = [...this.state.squares];  //浅拷贝primitive type， 没关系。
        //如果arr等，需要深拷贝。因为浅拷贝时是refer by address。
        squares[index] = this.state.isXNext? 'X': 'O';
        this.setState( state => ({
            squares,
            isXNext:!state.isXNext
//传一个function。这个function返回的是一个object。这个object返回的将是下一个state
    }));
                
    }

    renderSquare(index){
        return( 
        <Square  //两个props  
        value={ this.state.squares[index]} 
        handleClick= { () => this.handleClick(index)}  //closure 能保留其function 定义时候的scope。意即在Suqare内运行handleClick() 时也能access到 其定义时的variable：index
        />
        );
    }

    render(){
        const status = `next player: x`;
        //return jsx 表达式
        return (
        <div>
    <div className = "status">{status}</div>
    <div className = "board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
    </div>   
    <div className = "board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
    </div>
    
    <div className = "board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
    </div>

    </div>


        )
    }


}


export default Board;