import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import ReservationCard from "../components/ReservationCard";
import './Reservations.css';

const Rezervacijos = () => {
    const [userForms, setUserForms] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchUserForms = async () => {
            try {
                const response = await fetch("/api/forms", {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });

                if (response.ok) {
                    const json = await response.json();
                    setUserForms(json);
                } else {
                    console.error("Error fetching user forms:", response.status);
                }
            } catch (error) {
                console.error("Error fetching user forms:", error);
            }
        };

        if (user) {
            fetchUserForms();
        }
    }, [user]);

    const handleDeleteReservation = (id) => {
        setUserForms((prevForms) => prevForms.filter((form) => form._id !== id));
    };
    const handleUpdateReservation = (id, updatedReservation) => {
        setUserForms((prevForms) =>
          prevForms.map((form) =>
            form._id === id ? { ...form, ...updatedReservation } : form
          )
        );
      };

      return (
        <div className="reservation-screen">
            <h1 className="reservation-title">Mano rezervacijos:</h1>
            <div className="reservation-container">
                {userForms.length === 0 ? (
                    <p>Jūs neturite jokių rezervacijų.</p>
                ) : (
                    userForms.map((reservation) => (
                        <ReservationCard
                            key={reservation._id}
                            reservation={reservation}
                            onDelete={handleDeleteReservation}
                            onUpdate={handleUpdateReservation}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Rezervacijos;
