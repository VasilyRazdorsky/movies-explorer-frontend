import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
const Main = ({currentPage}) => {
    return (
        <>
            <Header currentPage={currentPage}/>
            <main className="page__content">
                <Promo />
                <NavTab />
                <AboutProject />
            </main>
        </>
    );
}

export default Main;