import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Details.css";
import { useHouseContext } from "../hooks/useHouseContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
  const notify = () => toast("Sekmingai užrezervuota!");
  const { user } = useAuthContext();
  const { id } = useParams();
  const [kambariai, setKambariai] = useState(null);
  const { dispatch } = useHouseContext();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Editing states
  const [editing, setEditing] = useState(false);
  const [updatedHouseData, setUpdatedHouseData] = useState(null);

  useEffect(() => {
    const fetchOneKambarius = async () => {
      try {
        const response = await fetch(`/api/selection/${id}`);
        const data = await response.json();
        setIsLoading(false);
        if (response.ok) {
          setKambariai(data);
        }
      } catch (err) {
        console.error("Error fetching data", err);
      }
    };

    fetchOneKambarius();
  }, [id]);

  // DELETE METHOD
  const handleClick = async () => {
    try {
      const response = await fetch(`/api/selection/${id}`, {
        method: "DELETE",
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "DELETE_WORKOUT", payload: json });
        navigate("/home-houses");
      } else {
        console.error("Error deleting house:", json.error);
      }
    } catch (error) {
      console.error("Error deleting house:", error);
    }
  };

  // FORM POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const uzsakymas = {
      fullName,
      email: user.email, 
      startDate,
      endDate,
      viesbutis: kambariai.pavadinimas, 
    };
    const response = await fetch("/admin/form", {
      method: "POST",
      body: JSON.stringify(uzsakymas),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();
    setIsLoading(false);
    if (!response.ok) {
      setError(json.error);
    } else {
      setFullName("");
      setStartDate("");
      setEndDate("");
      setIsSent(true);
      notify();
    }
  };
  
  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    setStartDate(selectedStartDate);

    // Set the minimum value for the endDate input field
    const minEndDate = new Date(selectedStartDate);
    minEndDate.setDate(minEndDate.getDate() + 1); // Add 1 day to the start date
    const minEndDateString = minEndDate.toISOString().slice(0, 16);

    // Update the min attribute of the endDate input field
    const endDateInput = document.getElementById("endDate");
    endDateInput.min = minEndDateString;
  };

  // PATCH EDITING ALL BELOW CODE
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedHouseData({
      ...updatedHouseData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setEditing(true);
    setUpdatedHouseData({
      pavadinimas: kambariai.pavadinimas,
      vieta: kambariai.vieta,
      kaina: kambariai.kaina,
      nuotrauka: kambariai.nuotrauka,
      kambariai: kambariai.kambariai,
      aprasymas: kambariai.aprasymas,
    });
  };

  const updateHouseData = async () => {
    try {
      const response = await fetch(`/api/selection/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedHouseData),
      });
      const data = await response.json();
      if (response.ok) {
        setKambariai(data);
        setEditing(false);
      } else {
        console.error("Error updating house:", data.error);
      }
    } catch (error) {
      console.error("Error updating house:", error);
    }
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateHouseData();
  };

  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, '');
  };

  return (
    <div className="container">
      {kambariai && (
        <>
          <h3>{kambariai.pavadinimas}</h3>
          <div className="card">
            <img
              className="img"
              src={kambariai.nuotrauka}
              alt={kambariai.nuotrauka}
            />
            
            <div className="book">
              {editing ? (
                <div className="edit-pasirinkimai">
                  <input
                    type="text"
                    value={
                      updatedHouseData ? updatedHouseData.kaina : kambariai.kaina
                    }
                    onChange={handleInputChange}
                    name="kaina"
                    />
                  <input
                    type="text"
                    value={
                      updatedHouseData
                      ? updatedHouseData.kambariai
                      : kambariai.kambariai
                    }
                    onChange={handleInputChange}
                    name="kambariai"
                    />
                    </div>
              ) : (
                <>
                <div className="price">
                  <span>Nuomos kaina: {kambariai.kaina}€</span><br />
                  <span>Kambarių skaičius: {kambariai.kambariai}</span>
                </div>
                <div className="svg">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="3em"
                  width="3em"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M17.5,6.5 L23,9 L23,22 L16,19 L8,22 L1,19 L1,6 L6,8 M16,19 L16,12 M8,22 L8,12 M12,16.2727273 C12,16.2727273 6,11.5 6,7 C6,3.25 9,1 12,1 C15,1 18,3.25 18,7 C18,11.5 12,16.2727273 12,16.2727273 Z M13,7 C13,6.44766667 12.5523333,6 12,6 C11.4476667,6 11,6.44766667 11,7 C11,7.55233333 11.4476667,8 12,8 C12.5523333,8 13,7.55233333 13,7 Z"
                    ></path>
                </svg>
                <h3>{kambariai.vieta}</h3>
              </div>
                    </>
              )}
             
            </div>
            {user && user.isAdmin && (
                <>
                  {editing ? (
                    <button onClick={handleEditSubmit} className="btn-book edit">
                      Išsaugoti
                    </button>
                  ) : (
                    <>
                      <button onClick={handleEditClick} className="btn-book edit">
                        Redaguoti
                      </button>
                      <button onClick={handleClick} className="btn-book delete">
                        Ištrinti
                      </button>
                    </>
                  )}
                </>
              )}
            {editing ? (
              <>
              <input
                type="text"
                value={
                  updatedHouseData
                  ? updatedHouseData.aprasymas
                  : kambariai.aprasymas
                }
                onChange={handleInputChange}
                name="aprasymas"
                />
                </>
            ) : (
              <>
              <h3>Aprašymas</h3>
              <div className="about">{stripHtmlTags(kambariai.aprasymas)}</div>
              </>
            )}
          </div>
          

          <form className="form" onSubmit={handleSubmit}>
  <h3>Rezervacijos forma</h3>
  <label>Vardas:</label>
  <input
    type="text"
    value={fullName}
    onChange={(e) => setFullName(e.target.value)}
  />
  <label>Rezervacija nuo:</label>
            <input
              type="datetime-local"
              value={startDate}
              onChange={handleStartDateChange}
              min={new Date().toISOString().slice(0, 16)}
            />
            <label>Iki:</label>
            <input
              type="datetime-local"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate ? new Date(startDate).toISOString().slice(0, 16) : ""}
            />
        {!isSent && (
          <button className="rezervuoti" type="submit" disabled={isLoading}>
            {isLoading ? "Siunčiama" : "Rezervuoti"}
          </button>
        )}
        {isSent && (
          <button disabled className="rezervuoti">
            Išsiųsta
          </button>
        )}
        {error && <div className="error">{error}</div>}
      </form>
        </>
      )}
    <ToastContainer />
    </div>
  );
};

export default Details;
