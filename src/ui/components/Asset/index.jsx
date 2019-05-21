import React from 'react';
import './index.scss';

const Asset = ({ name, trade }) => (
  <div className="asset-card">
    <h3>{name}</h3>
    <p>
      <strong>USD</strong>
      {trade.USD}
    </p>
    <p>
      <strong>EUR</strong>
      {trade.EUR}
    </p>
  </div>
);

export default Asset;
