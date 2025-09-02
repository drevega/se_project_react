import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export default function LoginModal({
  onClose,
  isOpen,
  onLogin,
  onSwitch,
  errorMessage,
}) {
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isButtonDisabled={!isValid}
      switchButton={
        <button type="button" className="modal__switch-btn" onClick={onSwitch}>
          or Sign Up
        </button>
      }
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          name="email"
          placeholder="Email"
          required
          value={values.email || ""}
          onChange={handleChange}
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          name="password"
          placeholder="Password"
          required
          minLength="8"
          value={values.password || ""}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="modal__error">{errors.password}</span>
        )}
      </label>
      {errorMessage && <span className="modal__error">{errorMessage}</span>}
    </ModalWithForm>
  );
}
