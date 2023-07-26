import Header from '../Header/Header';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = ({ currentPage }) => {
	return (
		<>
			<Header currentPage={currentPage} />
			<Search />
			<MoviesCardList currentPage={currentPage} />
			<Footer />
		</>
	);
};

export default SavedMovies;
