import React, { useState, useEffect } from 'react';

const Uzsakymai = ({ uzsakymas, onOrderDeleted }) => {
  const [approved, setApproved] = useState(localStorage.getItem(`order_${uzsakymas._id}_approved`) === 'true');

  useEffect(() => {
    localStorage.setItem(`order_${uzsakymas._id}_approved`, approved);
  }, [approved, uzsakymas._id]);

  const handleApprove = () => {
    setApproved(true);
  };

  const handleReject = async () => {
    try {
      const response = await fetch(`/admin/form/${uzsakymas._id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete order');
      }
      onOrderDeleted(uzsakymas._id);
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div className='order'>
      <h4>Užsakovas: {uzsakymas.fullName}</h4>
      <p className='viesbutis'>Apartamentai: {uzsakymas.viesbutis}</p>
      <p>Nuo: {uzsakymas.startDate}</p>
      <p>Iki: {uzsakymas.endDate}</p>
      <div className='patvirtinimo-mygtukai'>
        <button onClick={handleApprove}>
          {approved ? "Priimtas uzsakymas" : "Patvirtinti"}
        </button>
        {!approved && <button onClick={handleReject}>Atmesti</button>}
      </div>
    </div>
  );
};

export default Uzsakymai;