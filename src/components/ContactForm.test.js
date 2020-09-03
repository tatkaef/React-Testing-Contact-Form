import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("ContactForm renders", () => {
  const container = render(<ContactForm />);

  const firstNameText = screen.getByText(/First Name*/i);
  expect(firstNameText).toBeInTheDocument();

  const lastNameText = screen.getByText(/Last Name*/i);
  expect(lastNameText).toBeInTheDocument();

  const firstNameInput = screen.getByPlaceholderText("Edd");
  fireEvent.change(firstNameInput, { target: { value: "Vasya" } });

  const lastNameInput = screen.getByPlaceholderText("Burke");
  fireEvent.change(lastNameInput, { target: { value: "Smitt" } });

  const emailText = screen.getByPlaceholderText("bluebill1049@hotmail.com");
  expect(emailText).toBeInTheDocument();
  const emailInput = screen.getByTestId("email");
  fireEvent.change(emailInput, { target: { value: "Edd@nm.hi" } });

  const messageInput = screen.getByTestId("msg");
  fireEvent.change(messageInput, { target: { value: "Hello World!" } });

  const submitButton = screen.getByTestId("submit");
  fireEvent.click(submitButton);
});
