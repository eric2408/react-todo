import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, task="testing is part of todo"){
    const form = todoList.getByLabelText('Todo:');
    fireEvent.change(form, { target: { value: task } });
    const btn = todoList.getByText('Add Todo');
    fireEvent.click(btn)
}

it("renders without crashing", function() {
    render(<TodoList />);
  });

it("matches snapshot", function() {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adding todo to the list works", function(){
    const list = render(<TodoList />);
    addTodo(list);

    expect(list.getByLabelText('Todo:')).toHaveValue("");
    expect(list.getByText("testing is part of todo")).toBeInTheDocument();
    expect(list.getByText("Update")).toBeInTheDocument();
    expect(list.getByText("x")).toBeInTheDocument();
});


it("updating todo list", function(){
    const list = render(<TodoList />);
    addTodo(list);

    fireEvent.click(list.getByText('Update'));
    const updatingInfo = list.getByDisplayValue("testing is part of todo");
    fireEvent.change(updatingInfo, { target: { value: "walk a dog" }});
    fireEvent.click(list.getByText('Update Todo'));

    expect(list.getByText("walk a dog")).toBeInTheDocument();
    expect(list.queryByText("testing is part of todo")).not.toBeInTheDocument();
});

it("deleting a todo from the todo list", function(){
    const list = render(<TodoList />);
    addTodo(list);

    fireEvent.click(list.getByText('x'));

    expect(list.queryByText("testing is part of todo")).not.toBeInTheDocument();
})