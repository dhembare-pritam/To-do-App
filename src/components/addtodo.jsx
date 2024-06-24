import { useState } from "react";
import {BiMessageAdd} from 'react-icons/bi';

function AddTodo({onnewitem}){

  const [TodoName,settodoname]=useState("");
  const [TodoDate,settododate]=useState("");

  const handlenamechange=(event)=>{
      settodoname(event.target.value);
  }

  const handledatechange=(event)=>{
    settododate(event.target.value);
  }

  const handleaddbtnclicked=()=>{
     onnewitem(TodoName,TodoDate);
     settodoname("")
     settododate("")
  }

   return  <div className="container text-center">
   <div className="row kg-row">
     <div className="col-6">
      <input type="text" placeholder='enter todo here' value={TodoName} onChange={handlenamechange}/>
      </div>
     <div className="col-4">
      <input type="date" value={TodoDate} onChange={handledatechange}/>
      </div>
     <div className="col-2">
      <button type="button" className='btn btn-success kg-button' onClick={handleaddbtnclicked}><BiMessageAdd/></button></div>
   </div>
   </div>
}

export default AddTodo;