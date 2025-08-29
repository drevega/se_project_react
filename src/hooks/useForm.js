import { useState, useCallback } from "react";

// this hook can be used by any form
export function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // universal handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // update the values state
    setValues({ ...values, [name]: value });

    // check for validation errors on specific input
    setErrors({ ...errors, [name]: e.target.validationMessage });

    // check overall form validity using form's built-in checkValidity method
    setIsValid(e.target.closest("form").checkValidity());
  };

  // funct to reset form from another comp
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, setValues, resetForm };
}
