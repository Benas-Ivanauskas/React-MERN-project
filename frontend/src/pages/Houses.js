import React, { useState, useEffect } from "react";
import "./Houses.css";
import Select from "react-select";
import HouseCard from "../components/HouseCard";
import { useHouseContext } from "../hooks/useHouseContext";
import { useAuthContext } from "../hooks/useAuthContext";


const Houses = () => {
  const {house, dispatch}=useHouseContext()
  const {user} = useAuthContext()
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [inputValue, setInputValue] = useState("");


  useEffect(() => {
    const fetchKambarius = async () => {
      const response = await fetch("/api/selection/")
      const json = await response.json();
      if (response.ok) {
        dispatch({type:"SET_HOUSE", payload:json})
      }
    };
    if(user) {
      fetchKambarius();
    }

  }, [dispatch, user]);

  const locations = house
    ? Array.from(new Set(house.map((kambarys) => kambarys.vieta))).map(
        (vieta) => ({
          value: vieta,
          label: vieta,
        })
      )
    : [];

    const rooms = house
    ? Array.from(new Set(house.map((kambarys) => kambarys.kambariai))).map(
        (kambariai) => ({
          value: kambariai,
          label: kambariai,
        })
      )
    : [];

    const handleLocation = (selectedLocation) => {
      setSelectedLocation(selectedLocation);
    };
  
    const handleRoom = (selectedRoom) => {
      setSelectedRoom(selectedRoom);
    };
  
    const handlePriceRange = (selectedPriceRange) => {
      setSelectedPriceRange(selectedPriceRange);
    };

    const filteredData = house
    ? house.filter((kambarys) => {
        const locationMatch =
          !selectedLocation || kambarys.vieta === selectedLocation.value;
        const roomMatch =
          !selectedRoom || kambarys.kambariai === parseInt(selectedRoom.value);
        const searchMatch =
          search.toLowerCase() === "" ||
          kambarys.pavadinimas.toLowerCase().includes(search.toLowerCase());
        const priceMatch =
          !selectedPriceRange ||
          (selectedPriceRange.value === "351+" && kambarys.kaina >= 351) ||
          (selectedPriceRange.value !== "351+" &&
            kambarys.kaina >= parseInt(selectedPriceRange.value.split("-")[0]) &&
            kambarys.kaina <= parseInt(selectedPriceRange.value.split("-")[1]));
        return locationMatch && roomMatch && searchMatch && priceMatch;
      })
    : [];

    const resetFilters = () => {
      setSearch("");
      setInputValue("");
      setSelectedLocation(null);
      setSelectedRoom(null);
      setSelectedPriceRange(null);
    };

    const priceRanges = [
      { value: "0-49", label: "€0 - €49" },
      { value: "50-99", label: "€50 - €99" },
      { value: "100-149", label: "€100 - €149" },
      { value: "150-199", label: "€150 - €199" },
      { value: "200-249", label: "€200 - €249" },
      { value: "250-299", label: "€250 - €299" },
      { value: "300-350", label: "€300 - €350" },
      { value: "351+", label: "€351+" },
    ];

  return (
    <div className="houses-page">
      <div className="top">
        <h1>Ieškote buto nuomai? </h1>
        <p>Pasirinkite iš įvairių galimų nuomos pasiūlymų!</p>
      </div>
      <div className="ieskoti">
        <div className="filter">
          <div className="virsus">
            <input
              type="search"
              placeholder="Raktinis žodis"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => setSearch(inputValue)}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
                <path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"></path>
              </svg>
              Ieškoti
            </button>
          </div>
          <div className="middle">
            <hr />
            <p>Detalesnė paieška</p>
            <hr />
          </div>
          <div className="filters">
            <Select
              options={priceRanges}
              value={selectedPriceRange}
              onChange={handlePriceRange}
              className="price-range"
              placeholder="Kaina"
            />
            <Select
              options={locations}
              value={selectedLocation}
              onChange={handleLocation}
              className="place"
              placeholder="Miestas"
            />
            <Select
              options={rooms}
              value={selectedRoom}
              onChange={handleRoom}
              className="rooms"
              placeholder="Kambariai"
            />
          </div>
          <button className="reset" onClick={resetFilters}>Išvalyti</button>
        </div>
      </div>
      <div className="houses">
        {house && house.length > 0 ? (
          filteredData.map((kambarys) => (
            <HouseCard key={kambarys._id} kambarys={kambarys} />
          ))
        ) : (
          <p>Atsiprašome,bet šiuo metu pasiūlymų neturime</p>
        )}
      </div>
    </div>
  );
};

export default Houses;
