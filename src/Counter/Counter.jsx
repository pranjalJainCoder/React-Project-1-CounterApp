import React,{Component} from 'react';
import { render } from '@testing-library/react';
import CounterButton from './CounterButton';
import './Counter.css';





class Counter extends Component{

    constructor(){  
        super()
        this.state={
            counter:0
        }

        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.Reset=this.Reset.bind(this);
    }

    render(){
        return (
            <div className="Counter">               
               <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
               <CounterButton by={3} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
               <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                
                <span>{this.state.counter}</span>
                <br></br>
                <button onClick={this.Reset} className="button">Reset</button>
            </div>
          );
    }

    increment(by){
        this.setState(
            (prevState)=>{
                return {counter:prevState.counter+by}
            }   
        )
    }


    decrement(by){
        console.log('Here');
        this.setState(
            (prevState)=>{
                return {counter:prevState.counter-by}
            } 
        )
    }

    Reset(){
        console.log('Here');
        this.setState(
            (prevState)=>{
                return {counter:0}
            } 
        )
    }
}




export default Counter
