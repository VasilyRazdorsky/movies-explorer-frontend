import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ currentPage }) {
	return (
		<section
			className={`movies-list ${
				currentPage.pathname === '/saved-movies' && 'movies-list_place_saved'
			}`}
		>
			<div className="movies-list__cards-container">
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
				<MoviesCard currentPage={currentPage} />
			</div>
		</section>
	);
}
