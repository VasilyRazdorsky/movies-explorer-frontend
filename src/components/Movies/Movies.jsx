import Header from "../Header/Header";
import Search from "../Search/Search";

const Movies = ({ currentPage }) => {
    return ( 
        <>
            <Header currentPage={currentPage} />
            <Search />
        </>
        
    );
}

export default Movies;