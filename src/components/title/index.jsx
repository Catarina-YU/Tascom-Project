import React, { useState } from 'react';
import './style.css';

function Title({ children }) {
  const [color, setColor] = useState("orange");

  const handleMouseEnter = () => {
    setColor("white");
  };

  const handleMouseOut = () => {
    setColor("orange");
  };

  return (
    <h1 
      id="titulo" 
      style={{ color }} 
      onMouseEnter={handleMouseEnter} 
      onMouseOut={handleMouseOut}
    >
      {children}
    </h1>
  );
}

export default Title;
