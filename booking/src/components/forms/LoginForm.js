import React from "react";
import { useForm } from "react-hook-form";
import FormError from "./FormError";

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  const email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

        {/* <div className="alert alert-danger">
            <div>
              Email is required.
            </div>
            <div>
              Must be valid email format!
            </div>
          </div> */}
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
      </div>
      <button type="submit" className="btn btn-bwm-main">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
