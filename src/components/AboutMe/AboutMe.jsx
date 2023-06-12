import Divider from "../Divider/Divider"

const AboutMe = () => {
    return (
        <section className="about-me" id="about-me">
            <h2 className="about-me__title">Студент</h2>
            <Divider isGray={false} />

            <div className="about-me__info">
                <div className="about-me__info-block">
                    <h3 className="about-me__name">Василий</h3>
                    <h4 className="about-me__age">Фронтенд-разработчик, 20 лет</h4>
                    <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a href="https://github.com/VasilyRazdorsky" className="about-me__github-link">Github</a>
                </div>

                <img src="https://sun9-56.userapi.com/impg/LE4A0ECfjAyPHK-l1nJb5xuwHudqkHj_ApP-Jw/gIqYnrKCuSA.jpg?size=960x1280&quality=95&sign=7f82fdd678dc79fc34f0cbd70e9ab649&type=album" alt="Моё фото" className="about-me__photo"/>
            </div>

            
        </section>
    )
}

export default AboutMe;