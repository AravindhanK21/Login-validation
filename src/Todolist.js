import React from 'react';
import List from './List';
class Todolist extends React.Component{
    constructor(){
        super();
        this.state={
            term:'',
            items: []
        }
    }
    onChangeHandler=(e) => {
        this.setState({term: e.target.value})
    }
    
    onFormHandler = (e) => {
        e.preventDefault();
        this.setState({
            term:'',
            items: [...this.state.items, this.state.term]
        });
    }
    onDeleteHandler = index => {
        const deleteTask =[this.state.items];
        deleteTask.splice(index,1);
        this.setState({
            items:deleteTask
        });

    }; 
    render(){
        return(
            <div>
                <form>
                <div>
                <input type = "text" value={this.state.term}
                placeholder="enter term" onChange={this.onChangeHandler}/>
                
                <button onClick={this.onFormHandler}> Add Item </button>
                </div>
                </form>
            
        <List deleteTask= {this.onDeleteHandler} items= {this.state.items} />
</div>
        )
    }
}
export default Todolist;