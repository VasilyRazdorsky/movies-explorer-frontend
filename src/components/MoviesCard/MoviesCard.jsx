import { useState } from 'react';
import posterImagePath from '../../images/poster-image.jpg';
import deleteIconPath from '../../images/delete-icon.svg';

export default function MoviesCard({ currentPage, posterAlt }) {
	const [filmAdded, setFilmAdded] = useState(false);

	function handleFilmCheck() {
		setFilmAdded(!filmAdded);
	}
	return (
		<div className="card">
			<img src={posterImagePath} alt={posterAlt} className="card__poster" />
			<div className="card__info-block">
				<div className="card__main-info">
					<h2 className="card__film-name">33 слова о дизайне</h2>
					{currentPage.pathname === '/saved-movies' ? (
						<button className="card__delete-button">
							<img
								src={deleteIconPath}
								alt="Убрать из сохранённых"
								className="card__delete-icon"
							/>
						</button>
					) : (
						<label className="card__input-switch">
							<input
								type="checkbox"
								className="card__input"
								checked={filmAdded}
								onChange={handleFilmCheck}
							/>
						</label>
					)}
				</div>
				<p className="card__film-duration">1ч42м</p>
			</div>
		</div>
	);
}
