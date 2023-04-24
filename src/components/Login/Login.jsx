import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Login = ({currentPage}) => {
    return (
        <>
            <Header currentPage={currentPage} />
            <section className="login">
                <h1 className="login__title">Рады видеть!</h1>
                <form
                action="#"
                className="login__form"
                onSubmit={console.log('submit login')}
                >
                    <label htmlFor="email" className="login__label">E-mail</label>
                    <input 
                      className="login__input"
                      type="email"
                      name="email"
                      id="email"
                      onChange={console.log("change email")}
                      required
                    />

                    <label htmlFor="password" className="login__label">Пароль</label>
                    <input 
                      className="login__input"
                      type="password"
                      name="password"
                      id="password"
                      onChange={console.log("change password")}
                      required
                    />
                    <span className="form__error">Что-то пошло не так...</span>

                    <button type="submit" className="login__submit-button login__submit-button-action-login">Войти</button>
                </form>

                <p className="login__redirect-text">Ещё не зарегистрированы? <Link to="/signup" className="login__redirect-link">Регистрация</Link></p>
            </section>
        </>
    );
}

export default Login;