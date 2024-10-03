import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Todo = ({text,updateMode,deleteTodo}) => {
  return (
    <div >
    <div className='todoBox'>
    <div  className='content'>{text}</div>
       <div className='icons'>
        <FontAwesomeIcon icon={faEdit}   onClick={updateMode} />
        <FontAwesomeIcon icon={faTrash}  onClick={deleteTodo}/>
        </div>
        </div>
    </div>
  )
}

export default Todo

