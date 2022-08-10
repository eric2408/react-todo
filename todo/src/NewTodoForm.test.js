import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
    render(<NewTodoForm />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("create function runs on form submit", function(){
    const mock = jest.fn();
    const { getByText } = render(<NewTodoForm addTodo={mock}/>);
    fireEvent.click(getByText('Add Todo'));
    expect(mock).toHaveBeenCalled();
  })