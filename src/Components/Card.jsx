import React from 'react';
import { useContext } from 'react';
import { ContextGlobal } from './Context';

const Card = ({ professional }) => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className="card" style={{ backgroundColor: state.theme === 'dark' ? '#333' : '#fff' }}>
      <h2>{professional.name}</h2>
      <p>Email: {professional.email}</p>
      <p>Teléfono: {professional.phone}</p>
      <p>Website: {professional.website}</p>
    </div>
  );
};

export default Card;
