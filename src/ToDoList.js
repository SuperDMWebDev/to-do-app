import React from 'react';
import ToDo from './ToDo';
 
const ToDoList = ({ToDoList, EditList ,HandleToggle}) => {

     

   return (
       <main>
           <section className="task-list">
           <h2>Tasks</h2>
            <div id="tasks">
                    {
                        ToDoList.map(todo=>{
                            return(
                                <ToDo todo={todo} editlist={EditList} handletoggle={HandleToggle}/>
                            )
                        })
                    }
            </div>  
           
           </section>
       </main>
   );
};
 
export default ToDoList;