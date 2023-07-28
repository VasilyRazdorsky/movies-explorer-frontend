const Footer = () => {
	const date = new Date();

	return (
		<footer className="footer">
			<p className="footer__info">
				Учебный проект Яндекс.Практикум х BeatFilm.
			</p>

			<div className="footer__contacts">
				<p className="footer__year">© {date.getFullYear()}</p>
				<ul className="footer__links">
					<li>
						<a
							href="https://practicum.yandex.ru/"
							className="footer__link"
							target="blank"
						>
							Яндекс.Практикум
						</a>
					</li>

					<li>
						<a
							href="https://github.com/VasilyRazdorsky"
							className="footer__link footer__link_action_github"
							target="blank"
						>
							Github
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
