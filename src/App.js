
import './App.css';
import React, {useState} from 'react';
//mock data
import data from './data.json';

//components
import Header from "./Header";
import ToDoList from "./ToDoList";
import ButtonClear from './ToDoClear';
function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const EditList =(id,task)=>{
    let item=toDoList.map(element=>{
   
      return element.id===Number(id)? {...element,task:task, complete:false}:{...element}

    
    });
  
    setToDoList(item);
  }
  const HandleToggle=(id)=>{
 
    let item=toDoList.map(task=>{
     
   
      return task.id===Number(id)?{id: task.id, task:task.task, complete:!task.complete}:{...task};

    });
  
    setToDoList(item);

  }
  const HandleClear1=function(){
    
    let item=[];
    setToDoList(item);
  }
  const addTask=(task)=>{
    for(let i=0;i<toDoList.length;i++)
    {
      if(toDoList[i].task===task)
      {
        alert("Task existed. Please type another task");
        return;
      }
    }
    let item=[...toDoList];
    item=[...item,{id:toDoList.length+1,task:task,complete:false}]
    setToDoList(item);
  }
  return (
    <div className="App">
      <Header addTask={addTask}/>
      <ToDoList ToDoList={toDoList} HandleToggle={HandleToggle}  EditList={EditList}/>
      <ButtonClear HandleClear1={HandleClear1}/>
    </div>
  );
}


export default App;
