import React from "react";
import { render, screen } from "@testing-library/react";
import ScrollUp from "../components/ScrollUp";

test("Button ", () => {
    render(<ScrollUp />);
    const Button = screen.getByText("Up");

    expect(Button).toBeInTheDocument();
});
