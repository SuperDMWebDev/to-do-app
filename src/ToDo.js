import React from 'react';

const ToDo = ({todo, editlist ,handletoggle}) => {

    const handleEdit=(e)=>{
        e.preventDefault();

        const inputContent=document.getElementById(e.currentTarget.value);
        inputContent.classList.remove("strike");
        if(e.currentTarget.textContent.toLowerCase()=="edit")
        {
        inputContent.removeAttribute("readonly");
        inputContent.classList.remove("caret-hidden");
        inputContent.focus();
        e.currentTarget.textContent="Save";
        }
        else
        {
            editlist(e.currentTarget.value,inputContent.value);
            
            inputContent.setAttribute("readonly","readonly");
            e.currentTarget.textContent="edit";
            inputContent.classList.add("caret-hidden");
      
            
        }

    }
    const handleClick=(e)=>{
        e.preventDefault();
        handletoggle(e.currentTarget.id);
    }
    const handleDelete=(e)=>{
        document.getElementById(e.currentTarget.value+"task").remove();
      
    }
 
    return (
        <div id={todo.id+"task"} className="task">
                    <div className="content">
                        <input id={todo.id} type="text" className={todo.complete? "text strike": "text"} onClick={handleClick} placeholder={todo.task} defaultValue={todo.task}  readOnly/>
                    </div>
                    <div className="actions">
                        <button className="edit" onClick={handleEdit} value={todo.id}>Edit</button>
                        <button className="delete" onClick={handleDelete}  value={todo.id}>Delete</button>
                    </div>
        </div>
    );
};

export default ToDo;