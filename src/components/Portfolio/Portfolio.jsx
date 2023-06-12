import Divider from "../Divider/Divider";

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__item">
                <p className="portfolio__item-name">How to Learn</p>
                <a href="https://vasilyrazdorsky.github.io/how-to-learn/" className="portfolio__item-link">
                ↗
                </a>
            </div>

            <Divider isGray={true} />

            <div className="portfolio__item">
                <p className="portfolio__item-name">Russian Travel</p>
                <a href="https://vasilyrazdorsky.github.io/russian-travel/" className="portfolio__item-link">
                ↗
                </a>
            </div>

            <Divider isGray={true} />

            <div className="portfolio__item">
                <p className="portfolio__item-name">Mesto</p>
                <a href="https://mesto.vrazdorsky.nomoredomains.monster/" className="portfolio__item-link">
                ↗
                </a>
            </div>
        </section>
    );
}

export default Portfolio;