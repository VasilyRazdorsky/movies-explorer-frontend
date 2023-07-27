const Error404 = () => {
	return (
		<main className="error">
			<div className="error__text-block">
				<h1 className="error__title">404</h1>
				<p className="error__subtitle">Страница не найдена</p>
			</div>

			<button className="error__return-button">Назад</button>
		</main>
	);
};

export default Error404;
