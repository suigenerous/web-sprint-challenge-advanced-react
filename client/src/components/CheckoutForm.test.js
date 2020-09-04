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

    // inputs random strings into each field

    fields.forEach((field) => {
        let index = 0;
        fireEvent.change(field, {target: {value: randomStrings[index]}});
        index++;
    })

    // click checkout button 

    const checkoutButton = screen.getByRole('button', {name: /checkout/i})

    fireEvent.click(checkoutButton);

    // find success message

    const successMessage = screen.getByTestId("successMessage");

    // Assert

    // success message is in document

    expect(successMessage).toBeInTheDocument();

    // data matches

    const testIdsArr = ['firstName', 'lastName', 'address', 'city', 'state', 'zipcode'];

    testIdsArr.forEach((id) => {
        let index = 0;
        expect(screen.getByTestId(id)).toHaveTextContent(randomStrings[index]);
        index++;
    })

    // expect there to be an element with text for each string in success message
    randomStrings.forEach

});
