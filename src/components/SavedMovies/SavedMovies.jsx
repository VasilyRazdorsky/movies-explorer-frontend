import Header from '../Header/Header';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = ({ currentPage }) => {
	return (
		<>
			<Header currentPage={currentPage} />
			<main className="saved-movies">
				<Search />
				<MoviesCardList currentPage={currentPage} />
			</main>
			<Footer />
		</>
	);
};

export default SavedMovies;
