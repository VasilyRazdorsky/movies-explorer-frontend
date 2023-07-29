import { useCallback, useEffect, useState } from 'react';
import { emailRegex } from '../constants';

const useFormValidation = (formWithName, formWithPassword) => {
	const [values, setValues] = useState({
		email: formWithName ? (formWithName.email ? formWithName.email : '') : '',
		password: '',
		name: formWithName ? (formWithName.name ? formWithName.name : '') : '',
	});
	const [errors, setErrors] = useState({});
	const [isFormValid, setIsFormValid] = useState(false);
	const [target, setTarget] = useState('');

	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
		setErrors({
			...errors,
			[e.target.name]: e.validationMessage,
		});
		setTarget(e.target);
		console.log(values);
	};

	const validateEmail = (email) => {
		return email.toLowerCase().match(emailRegex);
	};

	const resetForm = useCallback(
		(values = {}, errors = {}, isValid = false) => {
			setValues(values);
			setErrors(errors);
			setIsFormValid(isValid);
		},
		[setValues, setErrors, setIsFormValid]
	);

	useEffect(() => {
		if (formWithName) {
			if (formWithPassword) {
				if (
					values.email &&
					validateEmail(values.email) &&
					values.name.length >= 2 &&
					values.password.length >= 2
				) {
					setIsFormValid(true);
				} else {
					setIsFormValid(false);
				}
			} else {
				if (
					values.email &&
					validateEmail(values.email) &&
					values.name.length >= 2
				) {
					setIsFormValid(true);
				} else {
					setIsFormValid(false);
				}
			}
		} else {
			if (
				values.email &&
				validateEmail(values.email) &&
				target.checkValidity() &&
				values.password.length >= 2
			) {
				setIsFormValid(true);
			} else {
				setIsFormValid(false);
			}
		}
	}, [target, values]);

	return { values, handleInputChange, errors, isFormValid, resetForm };
};

export default useFormValidation;
