import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ currentPage }) {
	return (
		<section
			className={`movies-list ${
				currentPage.pathname === '/saved-movies' && 'movies-list_place_saved'
			}`}
		>
			<ul className="movies-list__cards-container">
				<li>
					<MoviesCard currentPage={currentPage} posterAlt="Постер к фильму 1" />
				</li>
				<li>
					<MoviesCard currentPage={currentPage} posterAlt="Постер к фильму 2" />
				</li>
				<li>
					<MoviesCard currentPage={currentPage} posterAlt="Постер к фильму 3" />
				</li>
				<li>
					<MoviesCard currentPage={currentPage} posterAlt="Постер к фильму 4" />
				</li>
				<li>
					<MoviesCard currentPage={currentPage} posterAlt="Постер к фильму 5" />
				</li>
				<li>
					<MoviesCard currentPage={currentPage} posterAlt="Постер к фильму 6" />
				</li>
				<li>
					<MoviesCard currentPage={currentPage} posterAlt="Постер к фильму 7" />
				</li>
				<li>
					<MoviesCard currentPage={currentPage} posterAlt="Постер к фильму 8" />
				</li>
				<li>
					<MoviesCard currentPage={currentPage} posterAlt="Постер к фильму 9" />
				</li>
				<li>
					<MoviesCard
						currentPage={currentPage}
						posterAlt="Постер к фильму 10"
					/>
				</li>
			</ul>
		</section>
	);
}
