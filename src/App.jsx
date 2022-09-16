import './App.css';
import React, { useState } from 'react';
import ContactForm from './components/contactApp/ContactForm';
import Table from './components/contactApp/Table';

const App = () => {
  const [result, setResult] = useState([]);

  function getData(values) {
    setResult(result.concat(values));
  }

  return (
    <div>
      <ContactForm getData={getData} />
      <Table result={result} />
    </div>
  );
};

export default App;
