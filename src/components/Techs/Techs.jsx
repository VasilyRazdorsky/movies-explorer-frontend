const Techs = () => {
	return (
		<section className="techs" id="techs">
			<div className="techs__title-container">
				<h2 className="techs__title">Технологии</h2>
			</div>

			<h3 className="techs__subtitle">7 технологий</h3>
			<p className="techs__text">
				На курсе веб-разработки мы освоили технологии, которые применили в
				дипломном проекте.
			</p>

			<ul className="techs__cards">
				<li className="techs__card">HTML</li>
				<li className="techs__card">CSS</li>
				<li className="techs__card">JS</li>
				<li className="techs__card">React</li>
				<li className="techs__card">Git</li>
				<li className="techs__card">Express.js</li>
				<li className="techs__card">mongoDB</li>
			</ul>
		</section>
	);
};

export default Techs;
