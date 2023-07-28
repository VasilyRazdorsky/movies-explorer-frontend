const Portfolio = () => {
	return (
		<section className="portfolio">
			<h2 className="portfolio__title">Портфолио</h2>
			<ul className="portfolio__items">
				<li className="portfolio__item">
					<p className="portfolio__item-name">How to Learn</p>
					<a
						href="https://vasilyrazdorsky.github.io/how-to-learn/"
						className="portfolio__item-link"
						target="blank"
					>
						↗
					</a>
				</li>

				<li className="portfolio__item">
					<p className="portfolio__item-name">Russian Travel</p>
					<a
						href="https://vasilyrazdorsky.github.io/russian-travel/"
						className="portfolio__item-link"
						target="blank"
					>
						↗
					</a>
				</li>

				<li className="portfolio__item">
					<p className="portfolio__item-name">Mesto</p>
					<a
						href="https://mesto.vrazdorsky.nomoredomains.monster/"
						className="portfolio__item-link"
						target="blank"
					>
						↗
					</a>
				</li>
			</ul>
		</section>
	);
};

export default Portfolio;
