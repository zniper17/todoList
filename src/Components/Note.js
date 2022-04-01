import React, { useState } from "react";
function Note(props){
const[stateOfNote,setStateOfNote]=useState(true)
function handleClick(){
    setStateOfNote(function(prevValue){
        var b=!prevValue
        return b;
        
    });
    props.completebtn(props.index)
}
function handleDel(){
    props.notedel(props.index)

}

    return <div className="todo-container">
        <ul className="todo-list">
            <div className={props.noteStatus?"todo": "todo completed"}>
                <li className="todo-item">{props.noterec}</li>
                <button onClick={handleClick} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={handleDel} className="trash-btn">
                    <i className="fas fa-trash">
                        
                    </i>
                </button>

            </div>
        </ul>
    </div>
    
}

export default Note