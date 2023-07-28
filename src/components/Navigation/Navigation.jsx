import { Link, NavLink } from 'react-router-dom';
import userIconPath from '../../images/user-icon.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navigation = ({ currentPage, isAuthorized }) => {
	return (
		<>
			{currentPage.pathname === '/' && !isAuthorized ? (
				<nav className="navigation navigation_block_main">
					<ul className="navigation__links">
						<li>
							<Link
								to="signup"
								className="navigation__link navigation__link_action_signup"
							>
								Регистрация
							</Link>
						</li>

						<li>
							<Link
								to="signin"
								className="navigation__link navigation__link_action_signin"
							>
								Войти
							</Link>
						</li>
					</ul>
				</nav>
			) : (
				<>
					<nav className="navigation navigation_block_pages">
						<ul className="navigation__links">
							<li>
								<NavLink
									to="/movies"
									className={`navigation__link ${
										isAuthorized && 'navigation__link_authorized'
									} navigation__link_action_movies`}
									activeClassName="navigation__link_active"
								>
									Фильмы
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/saved-movies"
									className={`navigation__link ${
										isAuthorized && 'navigation__link_authorized'
									} navigation__link_action_saved-movies`}
									activeClassName="navigation__link_active"
								>
									Сохранённые фильмы
								</NavLink>
							</li>
						</ul>
					</nav>
					<nav className="navigation navigation_block_profile">
						<ul className="navigation__links">
							<li>
								<Link
									to="/profile"
									className={`navigation__link ${
										isAuthorized && 'navigation__link_authorized'
									} navigation__link_action_account`}
								>
									Аккаунт
								</Link>
							</li>
							<li>
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
							</li>{' '}
						</ul>
					</nav>
					<BurgerMenu />
				</>
			)}
		</>
	);
};

export default Navigation;
