import React, {useState} from "react";


function UpdateTodoForm({update, id, tasks}) {
    const [task, setTask] = useState(tasks);
    const handleChange = (e) => {
        setTask(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task !== ''){
            update( id, task);
        }
        setTask("");
    };


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Update Todo: </label>
            <input id="task" name="task" type="text" value={task} onChange={handleChange}/>
            <button>Update Todo</button>
        </form>
    );
}

export default UpdateTodoForm;