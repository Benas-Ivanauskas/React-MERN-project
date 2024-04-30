import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

const ReservationCard = ({ reservation, onDelete, onUpdate }) => {
  const { user } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedReservation, setEditedReservation] = useState({
    fullName: reservation.fullName,
    startDate: reservation.startDate,
    endDate: reservation.endDate,
    viesbutis: reservation.viesbutis,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedReservation({
      fullName: reservation.fullName,
      startDate: reservation.startDate,
      endDate: reservation.endDate,
      viesbutis: reservation.viesbutis,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedReservation({
      ...editedReservation,
      [name]: value,
    });

    // Update the min attribute of the endDate input field
    if (name === 'startDate') {
      const minEndDate = new Date(value);
      minEndDate.setDate(minEndDate.getDate() + 1);
      const minEndDateString = minEndDate.toISOString().slice(0, 16);
      const endDateInput = document.getElementById('endDate');
      endDateInput.min = minEndDateString;
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/forms/${reservation._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(editedReservation),
      });

      if (response.ok) {
        onUpdate(reservation._id, editedReservation);
        setIsEditing(false);
      } else {
        console.error('Problema atnaujinant rezervaciją:', response.status);
      }
    } catch (error) {
      console.error('Problema atnaujinant rezervaciją:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/forms/${reservation._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      });

      if (response.ok) {
        onDelete(reservation._id);
      } else {
        console.error('Problema trinant rezervaciją:', response.status);
      }
    } catch (error) {
      console.error('Problema trinant rezervaciją:', error);
    }
  };

  return (
    <div className="reservation-card">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="fullName"
            value={editedReservation.fullName}
            onChange={handleChange}
            placeholder="Jūsų vardas"
          />
          <input
            type="datetime-local"
            name="startDate"
            value={editedReservation.startDate}
            onChange={handleChange}
            min={new Date().toISOString().slice(0, 16)}
          />
          <input
            type="datetime-local"
            id="endDate"
            name="endDate"
            value={editedReservation.endDate}
            onChange={handleChange}
            min={editedReservation.startDate ? new Date(editedReservation.startDate).toISOString().slice(0, 16) : " "}
          />
          <button className='btn2' onClick={handleUpdate}>Išsaugoti</button>
          <button className='btn2' onClick={handleCancelEdit}>Atšaukti</button>
        </div>
      ) : (
        <div>
          <div className="card-content">
            <h3>Apartamentai: {reservation.viesbutis}</h3>
            <p>Rezervacija nuo: {reservation.startDate}</p>
            <p>Rezervacija iki: {reservation.endDate}</p>
            <button className='btn3' onClick={handleEdit}>Koreguoti</button>
            <button className='btn3' onClick={handleDelete}>Panaikinti rezervaciją</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationCard;
