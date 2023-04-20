const NavTab = () => {
    return (
        <section className="nav-tab">
            <div className="nav-tab__container">
                <nav className="nav-tab__panel">
                    <a href="#about-project" className="nav-tab__link">О проекте</a>
                    <a href="#techs" className="nav-tab__link">Технологии</a>
                    <a href="#about-me" className="nav-tab__link">Студент</a>
                </nav>
            </div>
        </section>
    );
}

export default NavTab;