import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Form from "../Form/Form";

const Login = ({currentPage}) => {

    return (
        <>
            <Header currentPage={currentPage} />
            <section className="login">
                <h1 className="login__title">Рады видеть!</h1>
                
                <Form
                    currentPage={currentPage}
                    submitButtonText="Войти"
                    children={
                    <>
                    <label htmlFor="email" className="form__label">E-mail</label>
                    <input 
                        className="form__input"
                        type="email"
                        name="email"
                        id="email"
                        required
                    />
                    <span className="form__error">Что-то пошло не так...</span>
        
                    <label htmlFor="password" className="form__label">Пароль</label>
                    <input 
                        className="form__input"
                        type="password"
                        name="password"
                        id="password"
                        required
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