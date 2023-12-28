import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <img src="src\assets\rick-and-morty-header.png" alt="RickAndMorty-Logo" />        
      </div>
      <div className="header-routes">
      <Link to="/">Personagens</Link>
      <Link to="/episodes">Episódios</Link>
      <Link to="/places">Lugares</Link>
      </div>
    </header>
  );
};

export { Header };
