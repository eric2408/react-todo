import React from "react";
import { render} from "@testing-library/react";
import UpdateTodoForm from "./UpdateTodoForm";

it("renders without crashing", function() {
    render(<UpdateTodoForm />);
  });
  
it("matches snapshot", function() {
    const { asFragment } = render(<UpdateTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});