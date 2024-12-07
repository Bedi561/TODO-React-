/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/createTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  //  better to use useeffect
  // fetch("https;//localhost:3000/todos")
  // .then(async function(res){
  //   const answer = await res.json();
  //   setTodos(answer.todos);
  // })
  return (
      <div>
       <CreateTodo/>
       <Todos todos={todos}/>
      </div>
  )
}

export default App
