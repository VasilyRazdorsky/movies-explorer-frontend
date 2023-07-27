import { Link, NavLink } from 'react-router-dom';
import userIconPath from '../../images/user-icon.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navigation = ({ currentPage, isAuthorized }) => {
	return (
		<>
			{currentPage.pathname === '/' && !isAuthorized ? (
				<nav className="navigation navigation_block_main">
					<Link
						to="signup"
						className="navigation__link navigation__link_action_signup"
					>
						Регистрация
					</Link>
					<Link
						to="signin"
						className="navigation__link navigation__link_action_signin"
					>
						Войти
					</Link>
				</nav>
			) : (
				<>
					<nav className="navigation navigation_block_pages">
						<NavLink
							to="/movies"
							className={`navigation__link ${
								isAuthorized && 'navigation__link_authorized'
							} navigation__link_action_movies`}
							activeClassName="navigation__link_active"
						>
							Фильмы
						</NavLink>
						<NavLink
							to="/saved-movies"
							className={`navigation__link ${
								isAuthorized && 'navigation__link_authorized'
							} navigation__link_action_saved-movies`}
							activeClassName="navigation__link_active"
						>
							Сохранённые фильмы
						</NavLink>
					</nav>
					<nav className="navigation navigation_block_profile">
						<Link
							to="/profile"
							className={`navigation__link ${
								isAuthorized && 'navigation__link_authorized'
							} navigation__link_action_account`}
						>
							Аккаунт
						</Link>
						<Link
							to="/profile"
							className="navigation__link navigation__link_action_user"
						>
							<img
								src={userIconPath}
								className="navigation__user-icon"
								alt="Иконка пользователя"
							/>
						</Link>
					</nav>
					<BurgerMenu />
				</>
			)}
		</>
	);
};

export default Navigation;
