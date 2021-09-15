import React, { Component } from 'react';
import Square from './Square';
import './Grid.css';

import O from '../assets/oBlanca.png'
import X from '../assets/xBlanca.png'
import empty from '../assets/Empty.png'

export class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 1,
            cells: [
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
            ],
            over: true
        }
    }

    changeCells(pos){
        if(this.state.over){
            let arr = this.state.cells
            let pj = this.state.turn
            if(arr[pos].value === 0){
                arr[pos].value = this.state.turn
                //change turn
                if(this.state.turn === 1){
                    arr[pos].img = O
                    pj = 2
                }else{
                    arr[pos].img = X
                    pj = 1
                }
                this.setState({
                    turn: pj,
                    cells: arr
                })
                //validate state for win
                const win = this.validateWin(arr)
                if(win===1){
                    this.props.result(1)
                    this.setState({ over: false})
                } else if(win===2){
                    this.props.result(2)
                    this.setState({ over: false})
                }
            }
        }
    }

    validateWin(arr){
        if(arr[0].value===arr[1].value && arr[1].value===arr[2].value && arr[1].value !== 0){ return arr[1].value}
        if(arr[3].value===arr[4].value && arr[4].value===arr[5].value && arr[4].value !== 0){ return arr[4].value}
        if(arr[6].value===arr[7].value && arr[7].value===arr[8].value && arr[7].value !== 0){ return arr[7].value}
        if(arr[0].value===arr[3].value && arr[3].value===arr[6].value && arr[3].value !== 0){ return arr[3].value}
        if(arr[1].value===arr[4].value && arr[4].value===arr[7].value && arr[4].value !== 0){ return arr[4].value}
        if(arr[2].value===arr[5].value && arr[5].value===arr[8].value && arr[5].value !== 0){ return arr[5].value}
        if(arr[0].value===arr[4].value && arr[4].value===arr[8].value && arr[4].value !== 0){ return arr[4].value}
        if(arr[2].value===arr[4].value && arr[4].value===arr[6].value && arr[4].value !== 0){ return arr[4].value}
        return 0
    }

    reset(){
        this.setState({
            cells: [
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
                {value: 0, img: empty},
            ],
            over: true
        })
        
    }

    render() { 
        return ( 
            <div className='board'>
                {this.state.cells.map((e,i) => <Square img={e.img} onClick={()=>this.changeCells(i)} key={i}/>)}
                <button onClick={() => this.reset()}>Reset</button>
            </div>
         );
    }
}