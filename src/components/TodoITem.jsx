import React, { useContext, useState } from 'react'
import styles from './TodoITem.module.css'
import TodoContext from '../contexts/TodoContext'

export default function TodoITem(props) {
    const {updatetodo,deletetodo,toggleCompleted}=useContext(TodoContext);
    const [editedtodo,setEditedtodo]=useState(props.todos.todo);
    const[isEdit,setisEdit]=useState(false);
    function deletebtn(){
        deletetodo(props.todos.id);
    }
    function editbtn(){
        if(!isEdit){
            setisEdit(true);
        }
        else{
            setisEdit(false);
            
            updatetodo(props.todos.id,editedtodo)
            console.log(editedtodo);
        }
        
    }
  return (
    <>
     <div className={props.todos.completed?styles.todoitemcomp:styles.todoitem}>
     <input className={styles.checkbox} type="checkbox"  checked={props.todos.completed} 
    onChange={()=>(toggleCompleted(props.todos.id),
    setisEdit(false))} />
      <input className={isEdit?styles.textdisplayonEdit:styles.textdisplay} onChange={(e)=>(setEditedtodo(e.target.value))} type="text"  value={editedtodo} readOnly={!isEdit} style={{textDecoration:`${props.todos.completed?'line-through':'none' }`}} />
      <button className={styles.edit} id='editbutton' onClick={editbtn} disabled={props.todos.completed ||!editedtodo} >{isEdit?'📂':'✏️'}</button>
      <button className={styles.delete} onClick={deletebtn}>❌</button>
     </div>
    </>
  )
}
