
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Login from "../Login";
import { AuthContextProvider } from "../../context/AuthContext";

test("tikriname login email placeholderio uzrasa", () => {
render(
    <BrowserRouter>
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    </BrowserRouter>
  );
  const emailInput = screen.getByPlaceholderText("Email...");
  expect(emailInput).toBeInTheDocument();
});

test("tikriname Login laukelio iveda vartotojo email", () => {
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    </BrowserRouter>
  );
  const emailInput = screen.getByPlaceholderText("Email...");
  fireEvent.change(emailInput, { target: { value: "emailas" } });
});

test("tikriname login password placeholderio uzrasa", () => {
  render(
      <BrowserRouter>
        <AuthContextProvider>
          <Login />
        </AuthContextProvider>
      </BrowserRouter>
    );
    const passwordInput = screen.getByPlaceholderText("Password...");
    expect(passwordInput).toBeInTheDocument();
  });

test("tikriname Login laukelio iveda vartotojo password", () => {
  render(
    <BrowserRouter>
      <AuthContextProvider>
        <Login />
      </AuthContextProvider>
    </BrowserRouter>
  );
  const passwordInput = screen.getByPlaceholderText("Password...");
  fireEvent.change(passwordInput, { target: { value: "password" } });
});

