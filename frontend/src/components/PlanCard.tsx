import React from 'react';

type PlanProps = {
  plan: {
    name: string;
    premium: number;
    deductible: number;
    network: string;
    location: string;
  };
};

const PlanCard = ({ plan }: PlanProps) => (
  <div className="plan-card">
    <h3>{plan.name}</h3>
    <p>Premium: ${plan.premium}/mo</p>
    <p>Deductible: ${plan.deductible}</p>
    <p>Network: {plan.network}</p>
    <p>Location: {plan.location}</p>
  </div>
);

export default PlanCard;
