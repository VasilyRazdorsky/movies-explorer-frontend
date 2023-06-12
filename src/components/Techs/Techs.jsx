import Divider from "../Divider/Divider";

const Techs = () => {
    return (
        <section className="techs" id="techs">
            <h2 className="techs__title">Технологии</h2>
            <Divider isGray={false}/>

            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

            <div className="techs__cards">
                <div className="techs__card">HTML</div>
                <div className="techs__card">CSS</div>
                <div className="techs__card">JS</div>
                <div className="techs__card">React</div>
                <div className="techs__card">Git</div>
                <div className="techs__card">Express.js</div>
                <div className="techs__card">mongoDB</div>
            </div>
        </section>
    );
}

export default Techs;