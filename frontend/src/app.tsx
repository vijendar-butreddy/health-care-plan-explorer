import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlanCard from './components/PlanCard';
import Filters from './components/Filters';
import './styles/App.css';

function App() {
  const [plans, setPlans] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/plans')
      .then(response => {
        setPlans(response.data);
        setFiltered(response.data);
      });
  }, []);

  const filterPlans = (criteria: any) => {
    const result = plans.filter(plan => {
      return (!criteria.network || plan.network === criteria.network);
    });
    setFiltered(result);
  };

  return (
    <div className="App">
      <h1>Healthcare Plan Explorer</h1>
      <Filters onFilter={filterPlans} />
      <div className="plan-list">
        {filtered.map(plan => <PlanCard key={plan.id} plan={plan} />)}
      </div>
    </div>
  );
}

export default App;