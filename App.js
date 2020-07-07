import React, { Component } from 'react';
export default class AddComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            number1:0,
            number2:1,
            number3:0,
            number4:0,
            number5:0

        }
    }
    handleChange = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    
    }

    add = () => {
        const{number1, number2} = this.state;
        this.setState({
            number3: (parseInt(number1)+this.state.number2),
            number4: (parseInt(number1)+this.state.number2+number2),
            number5: (parseInt(number1)+this.state.number2+number2+number2)
                
        })
    }

    render() {
        
        return (
            <div>
                 
                 <div>
                     <label>Number 1</label>
                     <input type="text" name="number1" onKeyUp={this.add}   onChange={this.handleChange} value={this.state.number1}/>
                </div>
                <div>
                     <label>Number 2</label>
                     <input type="text" name="number"  value={this.state.number3}/>
                </div>
                <div>
                    <label>Number 3</label>
                    <input type="text" name = "number" value ={this.state.number4}/>
                </div>
            
                <div><label>Number 4</label>
                    <input type="text" name = "number" value ={this.state.number5}/></div>
            </div>
        );
    }
}