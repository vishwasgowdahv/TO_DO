import { useContext } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoITem from './components/TodoITem'
import TodoContext from './contexts/TodoContext'

function App() {
  const{todos}=useContext(TodoContext)
  return (
   
    <>
    <div className="main">
      <AddTodo/>
      {(todos.length>0)?
      todos.map((e)=>(
        <div key={e.id} >
          <TodoITem todos={e}/>
        </div>
      )):<div>No Todos</div> }
      </div>
    </>
  )
}

export default App
