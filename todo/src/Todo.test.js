import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", function() {
  render(<Todo />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});


it('runs edit function on form submit', function(){
    const mock = jest.fn();
    const {getByText} = render(<Todo update={mock}/>);
    fireEvent.click(getByText('Update'));
    fireEvent.click(getByText('Update Todo'));
    expect(mock).toHaveBeenCalled();
});

it('runs delete function when x button is clicked', function(){
    const mock = jest.fn();
    const {getByText} = render(<Todo remove={mock}/>);
    fireEvent.click(getByText("x"));
    expect(mock).toHaveBeenCalled();
});