import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};

    if (form.name.length < 5)
      err.name = "Name should contain at least 5 characters";

    if (!(form.email.includes("@") && form.email.includes(".")))
      err.email = "Enter a valid email";

    if (form.password.length < 8)
      err.password = "Password should contain at least 8 characters";

    return err;
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful!");
    }
  };

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h2>Mail Registration</h2>

      <form onSubmit={handleSubmit}>

        <label>Name</label><br />
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{errors.name}</div>

        <br />

        <label>Email</label><br />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{errors.email}</div>

        <br />

        <label>Password</label><br />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <div style={{ color: "red" }}>{errors.password}</div>

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;