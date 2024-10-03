const TodoModel =  require('../models/TodoModel'); 

const saveTodo  = async (req,res)=>{
    const {text}  = req.body;
   await TodoModel.create({text})
    .then((data)=>{console.log('todo created successfully',data)
        res.send(data);
    })
.catch(()=>  console.log('error in adding data'));
}


const getTodo  = async (req,res)=>{
    
  const todo = await TodoModel.find();
  res.send(todo);
}

const updateTodo  = async (req,res)=>{
 const {_id,text} = req.body;
 await TodoModel.findByIdAndUpdate(_id,{text})
 .then(()=> res.send('update successfully'))
 .catch((err)=> res.send(err) );   
 
}
const deleteTodo  = async (req,res)=>{
 const {_id} = req.body;
 await TodoModel.findByIdAndDelete(_id)
 .then(()=> res.send('delete successfully'))
 .catch((err)=> res.send(err) );   
 
}



module.exports = {saveTodo,getTodo,updateTodo,deleteTodo}
