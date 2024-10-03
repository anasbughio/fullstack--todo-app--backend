import axios  from 'axios'

const  baseUrl = "http://localhost:5000"

const getAllToDo = (setTodo) =>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data---->',data);
        setTodo(data)
    }).catch(()=> console.log("error in fetching data"));
}
const addTodo = (text,setText,setTodo) =>{
   axios
   .post(`${baseUrl}/save`,{text})
   .then(()=> {
    console.log('todo added successfully');
    setText("");
    getAllToDo(setTodo);
})
}
const deleteTodo = (_id,setTodo) =>{
   axios
   .post(`${baseUrl}/delete`,{_id})
   .then(()=> {
    console.log('todo delete successfully');
    getAllToDo(setTodo);
}).catch(()=>console.log('error in deleting'))
}
const  updateTodo = (todoId,text,setTodo,setText,setIsUpdating) =>{
   axios
   .post(`${baseUrl}/update`,{_id:todoId,text})
   .then(()=> {
    console.log('todo delete successfully');
    getAllToDo(setTodo);
    setIsUpdating(false);
    setText("");
}).catch(()=>console.log('error in deleting'))
}

export  {getAllToDo,addTodo,deleteTodo,updateTodo}