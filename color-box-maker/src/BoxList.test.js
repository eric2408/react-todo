import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

function createBox(boxList, height='5', width='5', backgroundColor = 'green'){
    const heightIn = boxList.getByLabelText('Height');
    const widthIn = boxList.getByLabelText('Width');
    const backgroundColorIn = boxList.getByLabelText('Background Color');
    fireEvent.change(backgroundColorIn, {target: {value: backgroundColor}});
    fireEvent.change(widthIn, {target: {value: width}});
    fireEvent.change(heightIn, {target: {value: height}});
    fireEvent.click(boxList.getByText('Add a box'));
}

it("renders without crashing", function() {
    render(<BoxList />);
  });
  
  it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("can add a new box", function() {
    const boxList = render(<BoxList />);

    expect(boxList.queryByText("X")).not.toBeInTheDocument();
  
    createBox(boxList);
  
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
      width: 5em;
      height: 5em;
      background-color: green;
    `);

    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
  
  });
  
  it("can remove a box", function() {
    const boxList = render(<BoxList />);
    createBox(boxList);

    const removeButton = boxList.getByText("X");
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
  });