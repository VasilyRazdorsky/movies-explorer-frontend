import Divider from "../Divider/Divider";

const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer">
            <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>

            <Divider isGray={true} />

            <div className="footer__contacts">
                <p className="footer__year">© {date.getFullYear()}</p>
                <div className="footer__links">
                    <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
                    <a href="https://github.com/VasilyRazdorsky" className="footer__link footer__link_action_github">Github</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;