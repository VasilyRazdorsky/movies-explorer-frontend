import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import userIconPath from "../../images/user-icon.svg";

const BurgerMenu = () => {

    const [isNavigationOpen, setIsNavigationOpen] = useState(false);

    const handleBurgerButtonClick = () => {
        setIsNavigationOpen(true);
    }

    const handleCloseButtonClick = () => {
        setIsNavigationOpen(false);
    }

    return (
        <>
            <button className="burger-menu-button" onClick={handleBurgerButtonClick}>
                <span className="burger-menu-button__line burger-menu-button__line_number_01"></span>
                <span className="burger-menu-button__line burger-menu-button__line_number_02"></span>
                <span className="burger-menu-button__line burger-menu-button__line_number_03"></span>
            </button>

            <nav className={`side-navigation ${isNavigationOpen && "side-navigation_opened"}`}>
                <ul className="side-navigation__pages-list">
                    <li><NavLink exact to="/" className="side-navigation__link" activeClassName="side-navigation__link_active">Главная</NavLink></li>
                    <li><NavLink to="/movies" className="side-navigation__link" activeClassName="side-navigation__link_active">Фильмы</NavLink></li>
                    <li><NavLink to="/saved-movies" className="side-navigation__link" activeClassName="side-navigation__link_active">Сохранённые фильмы</NavLink></li>
                </ul>
                <div className="side-navigation__account">
                    <Link to="/profile" className="side-navigation__link side-navigation__link_action_account">Аккаунт</Link>
                    <Link to="/profile" className="side-navigation__link side-navigation__link_action_user">
                        <img src={userIconPath} className="side-navigation__user-icon" alt="Иконка пользователя"/>
                    </Link>
                </div>
                <button className="side-navigation__close-button" onClick={handleCloseButtonClick}></button>
            </nav>

            <div className={`background ${isNavigationOpen && "background_active"}`}></div>
        </>
    );
}

export default BurgerMenu;