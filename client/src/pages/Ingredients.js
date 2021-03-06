import React, { Component } from 'react';
import './Ingredients.css';

export class Ingredients extends Component{
    state = {
        i: this.props.i,
        left: [],
        right: []
    }
    componentWillMount (){
        this.setState({
            left: this.state.i.slice(0, this.state.i.length/2),
            right: this.state.i.slice(this.state.i.length/2, this.state.i.length)
        })
    }
    render() {
        return(
        <div class ="ing-table">
            <div class="ingredients">
                <ul class="icon1">  
                    {this.state.right.map(i => (
                        <li class="li-s"><i class="fas fa-plus"></i>{i}</li>
                    ))}
                </ul>
            </div> 
            <div class="ingredients">
                <ul class="icon2">
                {this.state.left.map(i => (
                        <li class="li-s"><i class="fas fa-plus"></i>{i}</li>
                    ))}
                </ul>   
            </div> 
        </div>
        )
    }

}

export default Ingredients