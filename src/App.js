import React, { useEffect, useState } from "react";
import Heading from "./Components/Heading.js"
import InputText from "./Components/InputText.js";
import Note from "./Components/Note.js"

function App() {
  const [note,setNote]=useState([])
  const[status,setStatus]=useState("all");
  const[filterednote,setFilteredNotes]=useState([])
  useEffect(() => {
    getLocalTodos();
  },[])
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
 },[status,note])


  function noteadd(value){
    setNote(function(prevValue){
      return [...prevValue,{
        text:value,notcompleted:true,index:Math.random()*1000
    }]})
  }
  function notecomplete(id){
    
var newNote=note.map(function(data){
  if(data.index==id){
    return {
      ...data,
      notcompleted:!data.notcompleted
    }}
    else{
      return data
    }
  })
  setNote(newNote)
}
  
  function noteDelete(id){
  setNote(prevNote =>{
    return prevNote.filter((noteItem)=>{
      return noteItem.index!==id
    })
  })
  }
  function filterHandler(){
    switch (status){
      case "completed":
        setFilteredNotes(note.filter(function(data){
          return data.notcompleted==false
        }))
        break;
        case "uncompleted":
          setFilteredNotes(note.filter(function(data){
            return data.notcompleted==true
    }))
    break;
    default:
      setFilteredNotes(note)
  }
  }
const saveLocalTodos=() =>{

    localStorage.setItem('note',JSON.stringify(note))
  
};
const getLocalTodos = () => {
  if(localStorage.getItem('note')==="null"){
    localStorage.setItem('note',JSON.stringify([]))
  }else{
 let noteLocal=JSON.parse(localStorage.getItem("note"))
 setNote(noteLocal);
  }
}
  return (
    <div className="App">
     <Heading />
     <InputText 
       onAdd={noteadd}
       onSelect={setStatus}
     />
     {
       filterednote.map(function(data){
         return <div>
                   <Note noterec={data.text} 
                     index={data.index}
                     notedel={noteDelete}
                     noteStatus={data.notcompleted}
                     completebtn={notecomplete}
                     
                   />
                           </div>

       })
     }

    </div>
  );

}

export default App
