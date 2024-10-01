import React, { useContext } from 'react';
import { ContextGlobal } from './Context';
import Form from "../Components/Form";

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;