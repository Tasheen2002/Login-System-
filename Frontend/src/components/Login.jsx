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
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create an Account
      </h2>
      <form onSubmit={handleSubmit(submitCall)}>
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
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name can only contain letters and spaces",
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
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
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
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile number must be exactly 10 digits",
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
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain uppercase, lowercase, number & special character",
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
