import logoPath from "../../images/main-logo.svg";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

const Header = ({currentPage}) => {
  const pagesWithNavigation = ["/", "/profile", "/saved-movies", "/movies"];

  return (
    <header className={`header ${currentPage.pathname === '/' ? "header_theme_dark": ""}`}>
      <Link to="/" className="header__logo-link">
        <img src={logoPath} className="header__logo" alt="логотип" />
      </Link>
      
      {pagesWithNavigation.includes(currentPage.pathname) && <>
        <Navigation currentPage={currentPage}/>
      </>}
    </header>
  );
};

export default Header;
