import React, { useState } from 'react';

type Props = {
  onFilter: (criteria: any) => void;
};

const Filters = ({ onFilter }: Props) => {
  const [network, setNetwork] = useState('');

  const applyFilters = () => {
    onFilter({ network });
  };

  return (
    <div className="filters">
      <label>
        Network:
        <select value={network} onChange={e => setNetwork(e.target.value)}>
          <option value="">All</option>
          <option value="HMO">HMO</option>
          <option value="PPO">PPO</option>
        </select>
      </label>
      <button onClick={applyFilters}>Apply</button>
    </div>
  );
};

export default Filters;