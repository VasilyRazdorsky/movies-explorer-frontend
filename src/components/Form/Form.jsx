const Form = ({ currentPage, submitButtonText, children }) => {
    return (
        <form
            action="#"
            className="form"
            noValidate
        >
            {children}
            <button type="submit" className={`form__submit-button ${currentPage.pathname === "/signin" ? "form__submit-button_action_login" : "form__submit-button_action_register"}`}>{submitButtonText}</button>
        </form>
    );
}

export default Form;