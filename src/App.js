import React,{ useState }  from 'react';
import './App.css';
import TodoList from './components/todolist';
import { Switch } from "antd";

function App() {
  const [toggle,setToggle]=useState(false);
  const toggler = () =>{
    toggle?setToggle(false):setToggle(true);
  }
  return (
    <div className={toggle?'todo-app':'todo-app-white'}>
      <button>
        Theme Change =>
        <Switch className='toggle-button'  onClick={toggler}/>
      </button>
      <TodoList />
    </div>
  );
}

export default App;
