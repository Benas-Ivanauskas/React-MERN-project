import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Houses from '../Houses'
import { AuthContextProvider } from '../../context/AuthContext';
import { HouseContextProvider } from '../../context/HousesContext';


test('Tikriname Houses komponento h1 ar geras tekstas', () => {
  render(
    <AuthContextProvider>
      <HouseContextProvider>
        <Houses />
      </HouseContextProvider>
    </AuthContextProvider>
  );
  const housesElement = screen.getByText(/Ieškote buto nuomai?/i);
  expect(housesElement).toBeInTheDocument();
});

test('Tikriname Houses komponento p ar geras tekstas', () => {
  render(
    <AuthContextProvider>
      <HouseContextProvider>
        <Houses />
      </HouseContextProvider>
    </AuthContextProvider>
  );
  const housesElement = screen.getByText(/Pasirinkite iš įvairių galimų nuomos pasiūlymų!/i);
  expect(housesElement).toBeInTheDocument();
});

test("Tikriname search laukelio placeholderi", () => {
  render(
    <AuthContextProvider>
      <HouseContextProvider>
        <Houses />
      </HouseContextProvider>
    </AuthContextProvider>
  );
  const searchInput = screen.getByPlaceholderText("Raktinis žodis");
  expect(searchInput).toBeInTheDocument();
});

test("tikriname search laukelio iveda vartotojo reiksme", () => {
  render(
    <AuthContextProvider>
      <HouseContextProvider>
        <Houses />
      </HouseContextProvider>
    </AuthContextProvider>
  );
  const searchInput = screen.getByPlaceholderText("Raktinis žodis");
  fireEvent.change(searchInput, { target: { value: "vartotojo tekstas" } });
});


  test('Tikriname, ar yra reset mygtukas', () => {
    render(
      <AuthContextProvider>
        <HouseContextProvider>
          <Houses />
        </HouseContextProvider>
      </AuthContextProvider>
    );
    const resetButton = screen.getByText("Išvalyti");
    expect(resetButton).toBeInTheDocument();
  });

  test('Tikriname, ar pateikiamas pranešimas, kai nėra duomenų', () => {
    render(
      <AuthContextProvider>
        <HouseContextProvider>
          <Houses />
        </HouseContextProvider>
      </AuthContextProvider>
    );
    const noDataMessage = screen.getByText(/Atsiprašome,bet šiuo metu pasiūlymų neturime/i);
    expect(noDataMessage).toBeInTheDocument();
  });


  test("Tikriname, ar veikia išvalymo mygtukas", () => {
    render(
      <AuthContextProvider>
        <HouseContextProvider>
          <Houses />
        </HouseContextProvider>
      </AuthContextProvider>
    );
    const searchInput = screen.getByPlaceholderText(/Raktinis žodis/i);
    const resetButton = screen.getByText(/Išvalyti/i);
    fireEvent.change(searchInput, { target: { value: "test" } });
    fireEvent.click(resetButton);
    expect(searchInput.value).toBe("");
  });

