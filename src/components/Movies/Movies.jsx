import Header from "../Header/Header";
import Search from "../Search/Search";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";

const Movies = ({ currentPage }) => {
    return ( 
        <>
            <Header currentPage={currentPage} />
            <Search />
            <MoviesCardList />
            <More />
        </>
        
    );
}

export default Movies;