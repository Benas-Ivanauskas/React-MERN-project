
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import Signup from "../Signup";

test("tikriname registracijos email placeholderio uzrasa", () => {
render(
    <BrowserRouter>
      <AuthContextProvider>
        <Signup />
      </AuthContextProvider>
    </BrowserRouter>
  );
  const emailInput = screen.getByPlaceholderText("Email...");
  expect(emailInput).toBeInTheDocument();
});

test("tikriname registracijos laukelio iveda vartotojo email", () => {
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <Signup />
      </AuthContextProvider>
    </BrowserRouter>
  );
  const emailInput = screen.getByPlaceholderText("Email...");
  fireEvent.change(emailInput, { target: { value: "emailas" } });
});

test("tikriname registracijos password placeholderio uzrasa", () => {
  render(
      <BrowserRouter>
        <AuthContextProvider>
          <Signup />
        </AuthContextProvider>
      </BrowserRouter>
    );
    const passwordInput = screen.getByPlaceholderText("Password...");
    expect(passwordInput).toBeInTheDocument();
  });

test("tikriname registracijos laukelio iveda vartotojo password", () => {
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <Signup />
      </AuthContextProvider>
    </BrowserRouter>
  );
  const passwordInput = screen.getByPlaceholderText("Password...");
  fireEvent.change(passwordInput, { target: { value: "password" } });
});

