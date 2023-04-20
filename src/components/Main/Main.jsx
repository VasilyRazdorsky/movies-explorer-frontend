import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
const Main = ({currentPage}) => {
    return (
        <>
            <Header currentPage={currentPage}/>
            <Promo />
            <NavTab />
            <AboutProject />
        </>
    );
}

export default Main;