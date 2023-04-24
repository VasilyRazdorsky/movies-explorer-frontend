import Header from "../Header/Header";
import Form from "../Form/Form";
import { Link } from "react-router-dom"; 

const Register = ({currentPage}) => {
    return(
        <>
            <Header currentPage={currentPage} />
            <section className="login">
                <h1 className="login__title">Добро пожаловать!</h1>
                
                <Form
                    currentPage={currentPage}
                    submitButtonText="Зарегистрироваться"
                    children={
                    <>
                    <label htmlFor="name" className="form__label">Имя</label>
                    <input 
                        className="form__input"
                        type="name"
                        name="name"
                        id="name"
                        required
                    />
                    <span className="form__error">Что-то пошло не так...</span>

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

                <p className="login__redirect-text">Уже зарегистрированы? <Link to="/signin" className="login__redirect-link">Войти</Link></p>
            </section>
        </>
        
    );
}

export default Register;