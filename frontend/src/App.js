

import React, { useEffect, useState } from "react";
import Todo from "./components/Todo"
import { getAllToDo,addTodo,deleteTodo ,updateTodo} from './utilis/HandleApi';




function App() {
  const [todo,setTodo] = useState([]);
  const [text,setText] = useState("");
  const [isUpdating,setIsUpdating] = useState(false);
  const [todoId,setTodoId] = useState("");

  useEffect(()=>{
    getAllToDo(setTodo);
  },[]);

  const updateMode = (_id,text)=>{
    setIsUpdating(true);
setText(text);
setTodoId(_id);
  }
 
  return (
    <div className="App">
    <div className="container">
    <h1 className="title">Todo App</h1>
  <div className="todo">
    <input
     type="text" 
        placeholder="Add Todo..." 
       value={text}
       className="text"
       onChange={(e)=> setText(e.target.value)}
    />
    <button className="add" onClick={ isUpdating? ()=>updateTodo(todoId,text,setTodo,setText,setIsUpdating) :   ()=>addTodo(text,setText,setTodo)} > {isUpdating?'Update':'Add'}  </button>
  </div>
  <div className="list">
{todo.map((item) => (
  <Todo 
    key={item._id}
    text={item.text}
    deleteTodo={()=> deleteTodo(item._id,setTodo)}
    updateMode={()=> updateMode(item._id,item.text)}
  />
))}

</div>

</div>
    </div>
  );
}

export default App;
