import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";

const Main = ({currentPage}) => {
    return (
        <>
            <Header currentPage={currentPage}/>
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
        </>
    );
}

export default Main;