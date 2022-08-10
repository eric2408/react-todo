import React, {useState} from "react";
import UpdateTodoForm from "./UpdateTodoForm";

function Todo({task = "empty task", id = "1", remove, update}) {
    const [edit, setEdit] = useState(false);

    const handleRemove = ()  => {
        remove(id);
    }

    const handleUpdate = () => {
        setEdit(edit => !edit)
    };

    let jsx = (
        <div>
            <li key={id}>{task}</li>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleRemove}>x</button>
        </div>);

    if(edit){
        jsx = (
            <div>
                <li key={id}>{task}</li>
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleRemove}>x</button>
                <UpdateTodoForm update={update} id={id} tasks={task}/>
            </div>)
    }
    
    

    return jsx;
}

export default Todo;