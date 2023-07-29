const AboutProject = () => {
	return (
		<section className="about-project" id="about-project">
			<h2 className="about-project__title">О проекте</h2>

			<div className="about-project__info">
				<div className="about-project__info-stages">
					<h3 className="about-project__info-title">
						Дипломный проект включал 5 этапов
					</h3>
					<p className="about-project__info-text">
						Составление плана, работу над бэкендом, вёрстку, добавление
						функциональности и финальные доработки.
					</p>
				</div>

				<div className="about-project__info-weeks">
					<h3 className="about-project__info-title">
						На выполнение диплома ушло 5 недель
					</h3>
					<p className="about-project__info-text">
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
						соблюдать, чтобы успешно защититься.
					</p>
				</div>
			</div>

			<div className="about-project__diagram">
				<div className="about-project__backend-block">
					<p className="about-project__diagram-text">1 неделя</p>
				</div>
				<div className="about-project__frontend-block">
					<p className="about-project__diagram-text">4 недели</p>
				</div>
				<p className="about-project__diagram-title">Back-end</p>
				<p className="about-project__diagram-title">Front-end</p>
			</div>
		</section>
	);
};

export default AboutProject;
