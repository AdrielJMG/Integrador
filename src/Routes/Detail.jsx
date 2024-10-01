import React, { useContext } from 'react';
import { ContextGlobal } from './Context';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();

  const professional = state.data.find((professional) => professional.id === parseInt(id));

  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h1>Detalle del profesional {id}</h1>
      <p>Nombre: {professional.name}</p>
      <p>Email: {professional.email}</p>
      <p>Teléfono: {professional.phone}</p>
      <p>Website: {professional.website}</p>
    </div>
  );
};

export default Detail;