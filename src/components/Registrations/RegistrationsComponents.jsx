import React, { useState } from "react";
import validator from "validator";

const RegistrationsComponents = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation Function
  const validate = () => {
    let newErrors = {};

    if (validator.isEmpty(formData.name)) {
      newErrors.name = "Name is required";
    }

    if (!validator.isEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!validator.isStrongPassword(formData.password, {
      minLength: 6,
      minLowercase: 1,
      minUppercase: 0,
      minNumbers: 1,
      minSymbols: 0,
    })) {
      newErrors.password = "Password must be at least 6 characters & contain a number";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Registration Success", formData);
      alert("Registration Successful!");
    }
  };

  return (
    <div className="register-container">
      <h2>Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <p className="error">{errors.name}</p>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <p className="error">{errors.password}</p>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <p className="error">{errors.confirmPassword}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationsComponents;
