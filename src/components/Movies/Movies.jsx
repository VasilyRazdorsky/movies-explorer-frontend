import Header from '../Header/Header';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Footer from '../Footer/Footer';

const Movies = ({ currentPage }) => {
	return (
		<>
			<Header currentPage={currentPage} />
			<main className="movies">
				<Search />
				<MoviesCardList currentPage={currentPage} />
				<More />
			</main>
			<Footer />
		</>
	);
};

export default Movies;
