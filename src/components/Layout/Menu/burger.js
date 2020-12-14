import React from 'react';

const Burger = ({ onChange, checked }) => (
  <div>
    <input type="checkbox" id="menuToggler" className="input-toggler" onChange={onChange} checked={checked} />
    <label htmlFor="menuToggler" className="menu-toggler" aria-label="Navigation button">
      <span className="menu-toggler-line" />
      <span className="menu-toggler-line" />
      <span className="menu-toggler-line" />
    </label>
  </div>
);

export default Burger;
