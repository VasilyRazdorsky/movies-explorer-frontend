import { Link } from "react-scroll";

const NavTab = () => {
    return (
        <section className="nav-tab">
            <div className="nav-tab__container">
                <nav className="nav-tab__panel">
                    <Link to="about-project" smooth={true} className="nav-tab__link">О проекте</Link>
                    <Link to="techs" smooth={true} className="nav-tab__link">Технологии</Link>
                    <Link to="about-me" smooth={true} className="nav-tab__link">Студент</Link>
                </nav>
            </div>
        </section>
    );
}

export default NavTab;