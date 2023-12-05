const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <img src="src\assets\rick-and-morty-header.png" alt="RickAndMorty-Logo" />        
      </div>
      <div className="header-routes">
      <a href="">Personagens</a>
      <a href="">Episódios</a>
      <a href="">Lugares</a>
      </div>
    </header>
  );
};

export { Header };
