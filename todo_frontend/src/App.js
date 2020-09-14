import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {value: '', todo_name:"", title:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state.todoItems = [
    {
      id: 1,
      bucket_name: "Go to Market",
      todo_name: "Buy ingredients to prepare dinner",
      completed: true
    },
    {
      id: 2,
      bucket_name: "Study",
      todo_name: "Read Algebra and History textbook for upcoming test",
      completed: false
    },
    {
      id: 3,
      bucket_name: "Sally's books",
      todo_name: "Go to library to rent sally's books",
      completed: true
    },
    {
      id: 4,
      bucket_name: "Article",
      todo_name: "Write article on how to use django with react",
      completed: false
    }
  ];
  }
  componentDidMount() {
    this.todoList();
  }
  todoList = () => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then(res => this.setState({ todoItems: res.data }))
      .catch(err => console.log(err));
  };
  handleChange(e) {
    const value = e.target.value;
    const field =  e.target.name;
    this.setState({[field]:value}) 
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
      return (
    <div style={{background:"grey"}}>
      <nav className="navbar navbar-light bg-dark ">
      <div className='navbar-brand text-light'>TODO Application</div>
      </nav>
      <br/>

     <div className='jumbotron container'>
      <form >
        <div className="form-group">
          <label htmlFor="todo_name">Todo Name</label>
          <input type="text" className="form-control" id="todo_name" name="todo_name" placeholder='Enter a Todo' 
          value={this.state.todo_name} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input list="browsers" type="text" className="form-control" id="title" name="title" placeholder='Enter the title'  
          value={this.state.title} onChange={this.handleChange}/>
          <datalist id="browsers">
            {this.state.todoItems.map(item => (  
              <option value={item.bucket_name} key={item.id}/>
              ))}
          </datalist>
        </div>
      
      <div className="form-group form-check form-check-inline">
        <input className="form-check-input" type="radio" name="status" id="status" value="option1"/>
        <label className="form-check-label" htmlFor="status">
          Completed
        </label>
      </div>
      <div className="form-group form-check form-check-inline">
        <input className="form-check-input" type="radio" name="status" id="not_completed" value="option2"/>
        <label className="form-check-label" htmlFor="not_completed">
        Not Completed
        </label>
      </div>
      <div className="form-group">
        <button type='submit' className='btn btn-primary'>Add Task</button>
      </div>
      </form>
      <table className="table table-bordered table-dark">
        <tbody>
        {this.state.todoItems.map(item => (  
          <tr key={item.id}>
          <td>{item.bucket_name}</td>
          <td>{item.completed}</td>
          <td><button>Edit</button></td>
          <td><button>Delete</button></td>
          </tr>
          ))}
        
        </tbody>
      </table>
      </div> <br/><br/>
    </div>
  );
  }
}

export default App;
