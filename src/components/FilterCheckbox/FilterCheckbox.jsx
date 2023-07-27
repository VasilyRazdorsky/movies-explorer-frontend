import { useState } from 'react';

export default function FilterCheckbox() {
	const [isFilterCheckboxActive, setIsFilterCheckboxActive] = useState(false);

	function handleFilterCheckboxToggle() {
		setIsFilterCheckboxActive(!isFilterCheckboxActive);
	}
	return (
		<label className="filter-checkbox">
			<input
				type="checkbox"
				name="film-mode"
				className="filter-checkbox__input"
				onChange={handleFilterCheckboxToggle}
				checked={isFilterCheckboxActive}
			/>
			<span
				className={`filter-checkbox__slider ${
					isFilterCheckboxActive && 'filter-checkbox__slider_active'
				}`}
			></span>
		</label>
	);
}
