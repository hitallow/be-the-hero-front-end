import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImage from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [UF, setUF] = useState('');
  const history = useHistory();
  // função responsável por capturar as informações e enviar para o backend
  async function handleRegister(e) {
    e.preventDefault();
    const values = {
      name,
      email,
      whatsapp,
      city,
      uf: UF,
    };
    try {
      const response = await api.post('ongs', values);
      alert(`Seu ID de acesso é : ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Erro, tente novamente');
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="to the hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG
          </p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para logon
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da ONG"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />

          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsApp(e.target.value)}
          />
          <div className="input-group">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Cidade"
            />
            <input
              value={UF}
              onChange={(e) => setUF(e.target.value)}
              type="text"
              placeholder="UF"
              style={{
                width: '80px',
              }}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
