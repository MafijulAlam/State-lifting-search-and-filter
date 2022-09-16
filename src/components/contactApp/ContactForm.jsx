import React, { useState } from 'react';
const initialValue = {
  name: '',
  email: '',
  group: '',
};
const ContactForm = ({ getData }) => {
  const [values, setValues] = useState({ ...initialValue });
  const { name, email, group } = values;
  function inputHandler(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    getData(values);
  }
  return (
    <form onSubmit={submitHandler}>
      <h1>Contact App</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={inputHandler}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={inputHandler}
        />
      </div>
      <br />
      <div>
        <label htmlFor="group">Group:</label>
        <select name="group" id="group" value={group} onChange={inputHandler}>
          <option value="">Select</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
      <br />
      <input type="submit" value="Create new Contact" />
    </form>
  );
};

export default ContactForm;
