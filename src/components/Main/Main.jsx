import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
const Main = ({currentPage}) => {
    return (
        <>
            <Header currentPage={currentPage}/>
            <Promo />
            <NavTab />
        </>
    );
}

export default Main;