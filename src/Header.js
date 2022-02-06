import React from 'react';
import ToDoForm from './TodoForm';
const Header = ({addTask}) => {
   return (
      
       <header>
            <h1>Task Lists</h1>
            <ToDoForm addTask={addTask}/>
       </header>
   );
};
 
export default Header;