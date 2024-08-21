import React, { useContext, useState } from 'react'
import TodoContext from '../contexts/TodoContext';
import styles from './AddTodo.module.css'

export default function AddTodo() {
    const{addtodo}=useContext(TodoContext)
    const [todo,setTodo]=useState('');
    function handleadd(){
        addtodo(todo);
        setTodo('');
    }
  return (
    <>
    <div className={styles.addtodo}>
      <div className={styles.heading}>
        <h1>LIST YOUR TODOS HERE</h1>
      </div>
      <div className={`${styles.inputs}`}>
      <input className={styles.addinput} type="text" value={todo}
      onChange={e=>setTodo(e.target.value)} placeholder='Enter TODO' />
      <button className={styles.addbtn} disabled={!todo} onClick={handleadd}>add</button>
      </div>
      </div>

    </>
  )
}
