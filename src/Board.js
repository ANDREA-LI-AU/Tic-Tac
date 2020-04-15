import React, { Fragment } from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import { updateSquareAction } from './redux/actions/boardActions';

class Board extends React.Component{

    // constructor(props){
    //     super(props);
    //    // this.state = {
    //         //squares:Array(9).fill(null),
    //         //isXNext: true   //轮流点击
    //     //};
    // }

    // componentDidMount(){
    //     console.log('mount');
    // }

    componentDidUpdate(){
        //alert in componentDidUpdate
        //if in render(), then it will lock the process while rendering;
        // if in handleClick, it will show alert before rerendering.
        // in componentDidUpdate it will check everytime the components get rerendered.
        const winner = this.calculateWinner(this.props.squares);
        if(winner) alert (`The winner is Player ${winner}`);
        
    }


    handleClick = (index) =>{
        // const hasValue = !this.state.squares[index];
        // const winner = this.calculateWinner(this.state.squares);
        //if(!hasValue || winner ) return;
        const {squares } = this.props;

        if(this.calculateWinner(squares) || squares[index]) return;

        //const squares = [...this.state.squares];  
        //浅拷贝primitive type， 没关系。
        //如果arr等，需要深拷贝。因为浅拷贝时是refer by address。
        //squares[index] = this.props.isXNext? 'X': 'O';
        this.props.updateSquare(index);
//         this.setState( state => ({
//             squares,
// //传一个function。这个function返回的是一个object。这个object返回的将是下一个state
//     }), );
                
    }

    renderSquare(index){
        return( 
        <Square  //两个props  
        value={ this.props.squares[index] } 
        handleClick= { () => this.handleClick(index)}  //closure 能保留其function 定义时候的scope。意即在Suqare内运行handleClick() 时也能access到 其定义时的variable：index
        />
        );
    }

    calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    render(){
        const winner = this.calculateWinner(this.props.squares);
        const status = winner? `Winner: ${winner}`: `next player: ${this.props.isXNext? 'X': 'O'}`;
        
        
        //return jsx 表达式
        return (
        <div>
    <div className = "status">{status}</div>
    { 
    !winner && (
    <Fragment>
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
</Fragment>
    )
    }
    </div>

        );
    }

}

const mapStateToProps = state => {
    //state is global state
    return {
        isXNext: state.board.isXNext,
        squares: state.board.squares
    };
};

const mapDispatchToProps = dispatch => {
    //dispatch is an object
    return{
        updateSquare: (index) => dispatch(updateSquareAction(index))
    }

}

//board: higher order component
export default connect(mapStateToProps, mapDispatchToProps)(Board) ;