import { useState } from 'react';
import posterImagePath from '../../images/poster-image.png';

export default function MoviesCard() {
	const [filmAdded, setFilmAdded] = useState(false);

	function handleFilmCheck() {
		setFilmAdded(!filmAdded);
	}
	return (
		<div className="card">
			<img
				src={posterImagePath}
				alt="Постер к фильму"
				className="card__poster"
			/>
			<div className="card__info-block">
				<div className="card__main-info">
					<p className="card__film-name">33 слова о дизайне</p>
					<label className="card__input-switch">
						<input
							type="checkbox"
							className="card__input"
							checked={filmAdded}
							onChange={handleFilmCheck}
						/>
					</label>
				</div>
				<p className="card__film-duration">1ч42м</p>
			</div>
		</div>
	);
}
