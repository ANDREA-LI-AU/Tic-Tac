import React from 'react';
//functional component;
class Square extends React.Component{
    //props is basic js object
    // can't modify props' value: READ ONLY!

    /*
    handleClick = () => {
        this.setState(
            //保证取 state 一定是上一个state。 在连续setstate的时候使用
            state => ({ value: 'X'}) ); // asy function : lifecycle
        console.log( 'state', this.state.value);

    }
    */

    render(){

    return (
        <button className="square" 
        onClick={()=>{
            this.props.handleClick();
        }
        }>
            {this.props.value} 
        </button>
        );
    }
}

export default Square;