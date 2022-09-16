import React, { useState } from 'react';

const Table = ({ result }) => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  let filterData = [];
  if (filter === 'All') {
    filterData = result;
  } else {
    filterData = result.filter((item) => item.group === filter);
  }

  if (search) {
    filterData = filterData.filter(
      (item) => item.name.includes(search) || item.email.includes(search)
    );
  }

  return (
    <div>
      <br />
      <label htmlFor="filter">Filter:</label>
      <select value={filter} onChange={filterHandler}>
        <option value="All">All</option>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="">None</option>
      </select>
      <input
        type="search"
        value={search}
        placeholder="Search"
        onChange={searchHandler}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Grpup</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
