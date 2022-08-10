import React, {useState} from "react";
import { v4 as uuid } from 'uuid';


function NewTodoForm({addTodo}) {
    const init = ("");
    const [task, setTask] = useState(init);
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task !== ''){
            addTodo({ task, id:uuid() });
        } else {
            addTodo({ id:uuid() });
        }
        setTask(init);
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Todo: </label>
            <input id="task" name="task" type="text" value={task} onChange={handleChange}/>
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;