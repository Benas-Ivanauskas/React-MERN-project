import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Create.css';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const [pavadinimas, setPavadinimas] = useState('');
  const [kaina, setKaina] = useState('');
  const [vieta, setVieta] = useState('');
  const [kambariai, setKambariai] = useState('');
  const [nuotrauka, setNuotrauka] = useState(null);
  const [aprasymas, setAprasymas] = useState('');
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setNuotrauka(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cleanAprasymas = aprasymas.replace(/<\/?p>/g, '');
    const formData = new FormData();
    formData.append('pavadinimas', pavadinimas);
    formData.append('kaina', kaina);
    formData.append('vieta', vieta);
    formData.append('kambariai', kambariai);
    formData.append('nuotrauka', nuotrauka);
    formData.append('aprasymas', cleanAprasymas);

    try {
      const response = await fetch('/api/selection', {
        method: 'POST',
        body: formData,
      });

      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setNuotrauka(null);
        setKaina('');
        setPavadinimas('');
        setKambariai('');
        setVieta('');
        setAprasymas('');
        setError(null);
        console.log('Naujas apartamentas pridetas');
        navigate('/home-houses');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="skelbimas" onSubmit={handleSubmit}>
      <div className="post">
        <h1>Sukurkite skelbimą</h1>
      </div>
      <div className="card-main">
        <label htmlFor="pavadinimas">Pavadinimas:</label>
        <input
          type="text"
          name="pavadinimas"
          value={pavadinimas}
          onChange={(e) => setPavadinimas(e.target.value)}
          placeholder='pavadinimas'
        />
        <label htmlFor="kaina">Kaina:</label>
        <input
          type="number"
          name="kaina"
          value={kaina}
          onChange={(e) => setKaina(e.target.value)}
          placeholder='kaina'
        />
        <label htmlFor="vieta">Miestas:</label>
        <input
          type="text"
          name="vieta"
          value={vieta}
          onChange={(e) => setVieta(e.target.value)}
          placeholder='miestas'
        />
        <label htmlFor="kambariai">Kambariai:</label>
        <input
          name="kambariai"
          type="number"
          value={kambariai}
          onChange={(e) => setKambariai(e.target.value)}
          placeholder='kambarių skaičius'
        />
        <label htmlFor="nuotrauka">Nuotrauka:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div className="description">
        <ReactQuill
          theme="snow"
          className="quill"
          value={aprasymas}
          onChange={setAprasymas}
        />
      </div>
      <div className="buttons">
        <button className="butt" type="submit">
          Skelbti
        </button>
        <Link to="/home-houses">
          <button className="butt">Atgal</button>
        </Link>
      </div>
        {error && <div className='error'>{error}</div>}
    </form>
  );
};

export default Create;
