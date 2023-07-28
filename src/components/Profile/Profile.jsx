import Header from '../Header/Header';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';

const Profile = ({ currentPage }) => {
	const history = useHistory();

	const { handleInputChange, isFormValid } = useFormValidation({
		name: 'Василий',
		email: 'pochta@yandex.ru',
	});

	const handleExitButtonClick = () => {
		history.push('/');
	};

	const [isFormActive, setIsFormActive] = useState(false);
	const [isFormErrorActive, setIsFormErrorActive] = useState(false);

	const handleEditButtonClick = () => {
		setIsFormActive(true);
	};

	const handleSubmit = () => {
		setIsFormActive(false);
	};

	return (
		<>
			<Header currentPage={currentPage} />
			<main className="profile">
				<h1 className="profile__title">Привет, Василий!</h1>
				<form className="profile__form" onSubmit={handleSubmit}>
					<div className="profile__input-block">
						<label htmlFor="name" className="profile__label">
							Имя
						</label>
						<input
							type="name"
							name="name"
							id="name"
							className={`profile__input profile__input_action_name ${
								isFormActive && 'profile__input_active'
							}`}
							disabled={!isFormActive}
							defaultValue="Василий"
							minLength="2"
							maxLength="30"
							onChange={handleInputChange}
							placeholder="Имя"
						/>
					</div>

					<div className="profile__input-block">
						<label htmlFor="email" className="profile__label">
							Почта
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className={`profile__input profile__input_action_email ${
								isFormActive && 'profile__input_active'
							}`}
							minLength="2"
							maxLength="64"
							disabled={!isFormActive}
							defaultValue="pochta@yandex.ru"
							onChange={handleInputChange}
							placeholder="Почта"
						/>
					</div>

					{isFormActive && (
						<>
							<p
								className={`profile__form-error ${
									isFormErrorActive && 'profile__form-error_active'
								}`}
							>
								При обновлении профиля произошла ошибка.
							</p>
							<button
								type="submit"
								disabled={!isFormValid}
								className={`profile__submit-button ${
									!isFormValid && 'profile__submit-button_disabled'
								}`}
							>
								Сохранить
							</button>
						</>
					)}
				</form>

				{!isFormActive && (
					<>
						<button
							className="profile__button profile__button_action_edit"
							onClick={handleEditButtonClick}
						>
							Редактировать
						</button>
						<button
							className="profile__button profile__button_action_exit"
							onClick={handleExitButtonClick}
						>
							Выйти из аккаунта
						</button>
					</>
				)}
			</main>
		</>
	);
};

export default Profile;
