import React from 'react';
import './styles.css';
import { FiLogIn } from 'react-icons/fi';

import heroImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Logo" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" name="id-field" id="fiel-id" />
          <button className="button" type="submit">
            Entrar
          </button>
          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Faça seu cadastro
          </a>
        </form>
      </section>
      <img src={heroImage} alt="Heroes" />
    </div>
  );
}
