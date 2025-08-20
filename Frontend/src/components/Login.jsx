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
              required: "Name ia required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} id="email" />
        </div>

        <div>
          <label htmlFor="mobile">Mobile</label>
          <input type="number" {...register("mobile")} id="mobile" />
        </div>

        <div>
          <label htmlFor="password">Passowrd</label>
          <input id="password" type="password" {...register("password")} />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Login;
