import Header from '../Header/Header';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';

const Register = ({ currentPage }) => {
	const { handleInputChange, isFormValid } = useFormValidation();
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Header currentPage={currentPage} />
			<main className="login">
				<h1 className="login__title">Добро пожаловать!</h1>

				<Form
					currentPage={currentPage}
					submitButtonText="Зарегистрироваться"
					isValid={isFormValid}
					handleSubmit={handleSubmit}
					children={
						<>
							<label htmlFor="name" className="form__label">
								Имя
							</label>
							<input
								className="form__input"
								type="name"
								name="name"
								id="name"
								required
								minLength="2"
								maxLength="30"
								onChange={handleInputChange}
							/>
							<span className="form__error">Что-то пошло не так...</span>

							<label htmlFor="email" className="form__label">
								E-mail
							</label>
							<input
								className="form__input"
								type="email"
								name="email"
								id="email"
								required
								minLength="2"
								maxLength="64"
								onChange={handleInputChange}
							/>
							<span className="form__error">Что-то пошло не так...</span>

							<label htmlFor="password" className="form__label">
								Пароль
							</label>
							<input
								className="form__input"
								type="password"
								name="password"
								id="password"
								required
								minLength="2"
								maxLength="40"
								onChange={handleInputChange}
							/>
							<span className="form__error">Что-то пошло не так...</span>
						</>
					}
				/>

				<p className="login__redirect-text">
					Уже зарегистрированы?{' '}
					<Link to="/signin" className="login__redirect-link">
						Войти
					</Link>
				</p>
			</main>
		</>
	);
};

export default Register;
