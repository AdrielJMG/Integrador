import React, { useContext } from 'react';
import { ContextGlobal } from './Context';
import Card from './Card';

const Home = () => {
  const { state, fetchData } = useContext(ContextGlobal);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((professional) => (
          <Card key={professional.id} professional={professional} />
        ))}
      </div>
    </div>
  );
};

export default Home;