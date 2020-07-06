import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
export default class Loginform extends Component {
    constructor() {
        super();
        this.state = {
            username:"",
            Password:""
        
        }
        this.handleLogin=this.handleLogin.bind(this)
        this.handleusernameChange=this.handleusernameChange.bind(this)
        this.handlepasswordChange=this.handlepasswordChange.bind(this)
        this.allLetter=this.allLetter.bind(this)
    }

    allLetter(inputtxt)
    { 
    var letters = /^[A-Za-z]+$/;
    if(inputtxt.match(letters))
    {
    alert('Your name have accepted : you can try another');
    
    return true;
    }
    else
    {
    alert('Please input alphabet characters only');
    
    return false;
    }
    }
    
    getLength(input1){
        if(input1.length<6){
            alert("minimum 6 characters required")
            return false;
           
        }
        else{
            alert("Input ok")
            return true;
        }
    }
reset(){
    this.setState({username:"",Password:""})
}
handleusernameChange(e) {
     this.setState({username: e.target.value}); 
     console.log(this.state.username)
    }
handlepasswordChange(e) 
{
     this.setState({Password: e.target.value});
     }
handleLogin() 
{console.log( "Login " +this.state.username)
    let username = this.state.username 
    this.allLetter(username)
    this.getLength(username)
    
    
console.log( "Login "+this.state.Password)
let  Password = this.state.Password
this.allLetter(Password)
this.getLength(Password)
}


    render  (){
        return (
            <form>
            <div>
                <h1>Login page Validation</h1>
                <input type ="text" name ="username" placeholder="enter Name" value={this.state.username}
                    onChange={ this.handleusernameChange}  />

                    <input type="Password" name="Password" placeholder="Password" value={this.state.Password} 
                    onChange={this.handlepasswordChange} /> 
                
              
               <a href ="/welcome">
                <button type="button" onClick={this.handleLogin}>Login</button>
                </a>
                
                   <button value="reset"  onClick={()=>{this.reset()}} >reset</button>
                   </div>
                   </form> 
        );

        }
}






