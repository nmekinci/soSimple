import React from 'react';

const Card = prop => {
  console.log(prop);
  console.log(prop.title);
  return (
    <div className="card">
      <h2>Title: {prop.title}</h2>
      <p>Desc: {prop.number}</p>
    </div>
  );
};

export default Card;
