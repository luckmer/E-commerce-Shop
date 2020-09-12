import React from "react";
import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

it("there should be an increment /decrement button ", () => {
    render(<Counter />);

    const increment = screen.getByText("+");
    const decrement = screen.getByText("-");

    expect(increment).toBeInTheDocument();
    expect(decrement).toBeInTheDocument();
});
