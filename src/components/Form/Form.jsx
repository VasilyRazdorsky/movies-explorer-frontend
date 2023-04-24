const Form = ({ currentPage, submitButtonText, isValid, handleSubmit, children }) => {
    return (
        <form
            action="#"
            className="form"
            onSubmit={handleSubmit}
        >
            {children}
            <button type="submit" disabled={!isValid} className={`form__submit-button ${!isValid && "form__submit-button_disabled"} ${currentPage.pathname === "/signin" ? "form__submit-button_action_login" : "form__submit-button_action_register"}`}>{submitButtonText}</button>
        </form>
    );
}

export default Form;