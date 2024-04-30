import React, { useEffect, useState } from 'react';
import './Orders.css';
import Uzsakymai from '../components/Uzsakymai';

const Orders = () => {
  const [uzsakymai, setUzsakymai] = useState([]);

  useEffect(() => {
    fetchUzsakymai();
  }, []);

  const fetchUzsakymai = async () => {
    try {
      const response = await fetch('/admin/form');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
      setUzsakymai(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleOrderDeleted = (deletedOrderId) => {
    setUzsakymai((prevUzsakymai) =>
      prevUzsakymai.filter((uzsakymas) => uzsakymas._id !== deletedOrderId)
    );
  };

  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Klientu Rezervacijos</h2>
      <div className="oders-page">
        {uzsakymai &&
          uzsakymai.map((uzsakymas) => (
            <Uzsakymai
              key={uzsakymas._id}
              uzsakymas={uzsakymas}
              onOrderDeleted={handleOrderDeleted}
            />
          ))}
      </div>
    </>
  );
};

export default Orders;