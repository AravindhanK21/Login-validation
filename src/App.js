import React,{Component} from 'react';
import './App.css';
import Loginform from "./components/Loginform"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Welcome from "./components/Welcome"
class App extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path ="/" component = {Loginform}/>
                        <Route exact path ="/Welcome" component = { Welcome }/>
                        
                        </Switch>

                </Router>
              
            </div>
        
        );
        }
    }
    
export default App;