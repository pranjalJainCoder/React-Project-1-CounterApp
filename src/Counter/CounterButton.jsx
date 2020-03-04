import React,{Component} from 'react';
import { render } from '@testing-library/react';
import PropType from 'prop-types';
import './Counter.css';




class CounterButton extends Component{

    constructor(){
        super()
        this.state={
            counter:0
        }

    }

    render(){
        return (
            <div className="CounterButton">
               <button onClick ={()=>this.props.incrementMethod(this.props.by)} className="button">+{this.props.by}</button>
               <button onClick={()=>this.props.decrementMethod(this.props.by)} className="button">-{this.props.by}</button>
              
            </div>
          );
    }

    
}

export default CounterButton
