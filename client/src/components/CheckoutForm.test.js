import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // Arrange
    render(<CheckoutForm/>)
    // Act
    const reactHeader = screen.findByText(/react plants/i);
    const checkoutHeader = screen.findByText(/checkout from/i);
    // Assert
});

test("form shows success message on submit with form details", () => {
    // Arrange
    // Act
    // Assert

});
