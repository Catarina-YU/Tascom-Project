import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Title({ children }) {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setActive(true);  // Ativa o efeito de animação
  };

  const handleMouseOut = () => {
    setActive(false);  // Desativa o efeito de animação
  };

  const handleClick = () => {
    navigate("/Question");
  };

  return (
    <h1
      id="titulo"
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
      className={active ? "active" : ""}
    >
      {children}
    </h1>
  );
}

export default Title;
