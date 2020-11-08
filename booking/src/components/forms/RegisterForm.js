import React from "react";
import { useForm } from "react-hook-form";
import { sameAs } from "helpers/validators";

const RegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors, getValues } = useForm();
  const email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          ref={register({ required: true })}
          name="username"
          type="text"
          className="form-control"
          id="username"
        />
        {errors.username && (
          <div className="alert alert-danger">
            {errors.username.type === "required" && (
              <span> Username is reguired</span>
            )}
          </div>
        )}
        {/* <div className="alert alert-danger">
            <div *ngIf="username.errors.required">
              Username is required.
            </div>
          </div> */}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          ref={register({ required: true, pattern: email_pattern })}
          name="email"
          type="email"
          className="form-control"
          id="email"
        />
        {errors.email && (
          <div className="alert alert-danger">
            {errors.email.type === "required" && (
              <span> Email is reguired</span>
            )}
            {errors.email.type === "pattern" && (
              <span>No valid email format!</span>
            )}
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          ref={register({ required: true, minLength: 5 })}
          name="password"
          type="password"
          className="form-control"
          id="password"
        />
        {errors.password && (
          <div className="alert alert-danger">
            {errors.password.type === "required" && (
              <span> Password is reguired</span>
            )}
            {errors.password.type === "minLength" && (
              <span>Minimum length of password is 5 characters !</span>
            )}
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          ref={register({
            required: true,
            minLength: 5,
            validate: { sameAs: sameAs("password", getValues) },
          })}
          name="passwordConfirmation"
          type="password"
          className="form-control"
          id="passwordConfirmation"
        />
        {errors.passwordConfirmation && (
          <div className="alert alert-danger">
            {errors.passwordConfirmation.type === "required" && (
              <span> Password confirmation is reguired</span>
            )}
            {errors.passwordConfirmation.type === "minLength" && (
              <span>
                Minimum length of password confirmation is 5 characters !
              </span>
            )}
            {errors.passwordConfirmation.type === "sameAs" && (
              <span>
                Password confirmation should be same as the password !
              </span>
            )}
          </div>
        )}
      </div>
      <button type="submit" className="btn btn-bwm-main">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
