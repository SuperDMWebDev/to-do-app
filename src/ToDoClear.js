import React from 'react';

const ButtonClear= ({HandleClear1})=>{
 
    return(
        <button onClick={HandleClear1} className="DeleteAll">Clear all</button>
    );
};
export default ButtonClear;