import Header from "../Header/Header";
import Promo from "../Promo/Promo";
const Main = ({currentPage}) => {
    return (
        <>
            <Header currentPage={currentPage}/>
            <Promo />
        </>
    );
}

export default Main;