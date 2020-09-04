import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // Arrange
    render(<CheckoutForm/>);
    // Act
    const checkoutHeader = screen.getByText(/checkout form/i);
    // Assert
    expect(checkoutHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    // Arrange
    render(<CheckoutForm/>)
    // Act
    const firstNameField = screen.getByLabelText(/first name/i);
    const lastNameField = screen.getByLabelText(/last name/i);
    const cityField = screen.getByLabelText(/city/i);
    const stateField = screen.getByLabelText(/state/i);
    const addressField = screen.getByLabelText(/address/i);
    const zipField = screen.getByLabelText(/zip/i);

    const fields = [
        firstNameField,
        lastNameField,
        cityField,
        stateField,
        addressField,
        zipField
    ];

    const genString = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };

    const genStrings = (iter) => {
        const stringArr = [];
        for (let i=0; i < iter; i++){
            stringArr.push(genString());
        }
        return stringArr;
    };

    const randomStrings = genStrings(fields.length);

    fields.forEach((field) => {
        let index = 0;
        fireEvent.change(field, {target: {value: randomStrings[index]}});
        index++;
    })

    // Assert

});
