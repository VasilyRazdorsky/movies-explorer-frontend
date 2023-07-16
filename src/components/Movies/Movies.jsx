import Header from "../Header/Header";
import Search from "../Search/Search";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({ currentPage }) => {
    return ( 
        <>
            <Header currentPage={currentPage} />
            <Search />
            <MoviesCardList />
        </>
        
    );
}

export default Movies;