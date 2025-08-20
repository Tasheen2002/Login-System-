import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitCall = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitCall)}>
        <h2>Create an Account</h2>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            {...register("fullName", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
          />
          {errors.fullName && <div>{errors.fullName.message}</div>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 5,
                message: "Email must be at least 5 characters long",
              },
            })}
            id="email"
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>

        <div>
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            {...register("mobile", {
              required: "Mobile number is required",
              minLength: {
                value: 5,
                message: "Mobile number must be at least 5 characters long",
              },
            })}
            id="mobile"
          />
          {errors.mobile && <div>{errors.mobile.message}</div>}
        </div>

        <div>
          <label htmlFor="password">Passowrd</label>
          <input
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters",
              },
            })}
            type="password"
            {...register("password")}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
