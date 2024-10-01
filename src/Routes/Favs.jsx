import React, { useContext } from 'react';
import { ContextGlobal } from './Context';
import Card from './Card';

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  const favs = state.data.filter((professional) => professional.isFav);

  return (
    <div>
      <h1>Favoritos</h1>
      <div className="card-grid">
        {favs.map((professional) => (
          <Card key={professional.id} professional={professional} />
        ))}
      </div>
    </div>
  );
};

export default Favs;