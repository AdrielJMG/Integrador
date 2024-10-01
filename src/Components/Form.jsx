import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length < 5) {
      setError('Por favor, ingresa un nombre completo');
      return;
    }

    if (!email.includes('@')) {
      setError('Por favor, ingresa un email válido');
      return;
    }

    setSuccess(`Gracias ${name}, te contactaremos cuando antes vía mail`);
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre completo:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <button type="submit">Enviar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};

export default Form;