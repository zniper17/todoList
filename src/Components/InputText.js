import React, { useState } from "react";
function InputText(props){
    const [inputText,setInputText]=useState("")
    
    function handleChange(event){
        const value=event.target.value
setInputText(value)


    }
    function handleClick(event){
          props.onAdd(inputText)
        event.preventDefault()
        setInputText("")

    }
    function handleSelect(e){
        props.onSelect(e.target.value);
    }

    return <div>
         <form  >
      <input onChange={handleChange}  type="text" class="todo-input"  value={inputText} />
      <button onClick={handleClick} className="todo-button" type="submit">
      
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleSelect} name="todos" className="filter-todo" >
          <option  value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </div>
}

export default InputText 