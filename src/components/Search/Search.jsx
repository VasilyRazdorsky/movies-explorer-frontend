import Divider from '../Divider/Divider';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function Search() {
	return (
		<section className="search">
			<form className="search__form">
				<div className="search__input-text-container">
					<input
						type="text"
						name="filter"
						id="filter"
						placeholder="Фильм"
						className="search__input"
						required
					/>
					<button type="submit" className="search__submit">
						Найти
					</button>
				</div>

				<div className="search__filter-container">
					<FilterCheckbox />
					<p className="search__filter-name">Короткометражки</p>
				</div>
			</form>

			<Divider isGray={true} />
		</section>
	);
}
