import React, {useState} from "react";
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';


function TodoList() {
    const initial = [];
    const [todos, setTodos] = useState(initial);

    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo])
    }

    const remove = (id) => {
        setTodos(todos => todos.filter(todo=> todo.id!= id));
    }

    const update = (id, value) => {
        setTodos(todos => todos.map(todo => 
            todo.id === id ? { ...todo, task: value } : todo));
    }

    return (
        <div>
            <h1>My Todo List</h1>
            <NewTodoForm addTodo={addTodo}/>
            <ul>
                {todos.map(todo => 
                <Todo 
                key={todo.id}
                id={todo.id}
                task={todo.task}
                remove={remove}
                update={update}
                />
                )}
            </ul>
        </div>
    );
}

export default TodoList;
