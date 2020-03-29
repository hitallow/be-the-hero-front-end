import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import heroImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();
  async function onLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongID', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (error) {
      alert('Não foi possível fazer login');
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Logo" />
        <form onSubmit={onLogin}>
          <h1>Faça seu logon</h1>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Sua ID"
            name="id-field"
            id="fiel-id"
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Faça seu cadastro
          </Link>
        </form>
      </section>
      <img src={heroImage} alt="Heroes" />
    </div>
  );
}
