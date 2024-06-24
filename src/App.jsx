import AppName from "./components/appName";
import AddTodo from "./components/addtodo";
//import TodoItem from "./components/todoitem";
import TodoItems from "./components/todoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {

  const [todoItems,settodoItems]=useState([])

  const handleNewItem = (itemName, itemDueDate)=>{
    console.log(`new item added: ${itemName} date:${itemDueDate}`);
    const newtodoitems = [...todoItems, {name:itemName, duedate:itemDueDate}];
     settodoItems(newtodoitems)
  }

  const handleDeleteItem=(todoItemName)=>{
     const newtodoitems = todoItems.filter(item=>item.name !== todoItemName);
     settodoItems(newtodoitems)
  }
  return <center className='todo-container container1'>
    <AppName/>
    <AddTodo onnewitem={handleNewItem}/>
    {todoItems.length===0 && <Welcome></Welcome>}
   <TodoItems todoItems={todoItems} ondeleteclick1={handleDeleteItem}></TodoItems>
  </center>
}

export default App;


// import React from 'react';
// import "./App.css"

// function App() {
//   return <center>

//     <div className='head1'><h1>Todo App</h1></div>
// <div class="container">
//   <div class="row p1">
//     <div class="col-5"> 
//         <input type='text' placeholder='Enter todo app'></input>
//     </div>
//     <div class="col-4">
//     <input type='date'></input>
//     </div>
//     <div class="col-3">
//     <button type="button" class="btn btn-success kg-button" >add</button>
//     </div>
//   </div>
//   <div class="row p1">
//     <div class="col-5">
//       buy milk
//     </div>
//     <div class="col-4">
//         4/10/2023
//     </div>
//     <div class="col-3">
//     <button type="button" class="btn btn-danger kg-button">Delete</button>
//     </div>
//   </div>
//   <div class="row p1">
//     <div class="col-5">
//       Go to college
//     </div>
//     <div class="col-4">
//         4/10/2023
//     </div>
//     <div class="col-3">
//     <button type="button" class="btn btn-danger kg-button">Delete</button>
//     </div>
//   </div>
// </div>
//         </center>

// }

// export default App;
