import React, { useState }  from "react";
const ToDoForm =({addTask})=>{
    const [userInput,setUserInput]= useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userInput!=='')
        {
          addTask(userInput);
        }
        else
        {
            alert('Please input at least 1 character');
        }
        setUserInput('');
    }
    const handleChange=(e)=>{
        setUserInput(e.currentTarget.value);
    }
    const handleMove = (e) => {
     
        const substring=e.currentTarget.id.substring(0,1);
        console.log(substring);
        const a=document.getElementsByClassName("task");
        for(let i=0;i<a.length;i++)
        {
            a[i].classList.add("draggable");
        }
    };
    return(
        <form onSubmit={handleSubmit} id="new-task-form">
            <input value={userInput} name="new-text-input" id="new-task-input" type="text" onChange={handleChange} placeholder="Please input task"/>
            <input type="submit" id="new-task-submit" value="Add task" />
          
        </form>  
    );
}
export default ToDoForm;