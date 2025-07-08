import React from 'react';

function Feature({ image, title, description }) {
  return (
    <div className="feature">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;