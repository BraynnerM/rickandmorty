//import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <Link to="/">
          <img src="/assets\rick-and-morty-header.png" alt="RickAndMorty-Logo" /> 
        </Link>               
      </div>
      <div className="header-routes">
      <Link to="/">Characters</Link>
      <Link to="/episodes">Episodes</Link>
      <Link to="/places">Places</Link>
      </div>
    </header>
  );
};

export { Header };
