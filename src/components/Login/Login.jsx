import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Form from "../Form/Form";
import useFormValidation from "../../hooks/useFormValidation";

const Login = ({currentPage}) => {
    const { handleInputChange, isFormValid } = useFormValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Header currentPage={currentPage} />
            <section className="login">
                <h1 className="login__title">Рады видеть!</h1>
                
                <Form
                    currentPage={currentPage}
                    submitButtonText="Войти"
                    isValid={isFormValid}
                    handleSubmit={handleSubmit}
                    children={
                    <>
                    <label htmlFor="email" className="form__label">E-mail</label>
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
        
                    <label htmlFor="password" className="form__label">Пароль</label>
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
                }/>

                <p className="login__redirect-text">Ещё не зарегистрированы? <Link to="/signup" className="login__redirect-link">Регистрация</Link></p>
            </section>
        </>
    );
}

export default Login;