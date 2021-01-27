import React, { useState } from "react";

function Login({history}) {
  // hooke
  const [showError, setShowError] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    empty: "",
    length: "",
    email: "",
    loggedIn: "",
    upperCase: "",
    loweCase: "",
    number: "",
    specialCharacter: "",
  });
  // helper functions
  let flag = true;
  var re = /\S+@\S+\.\S+/;
  const { email, password } = form;
  var special   = /[\W]{1,}/ ; 
  // function to check error
  const logIn = () => {
    if (flag == true) {
      setError((error) => ({
        ...error,
        loggedIn: "You Are being logged in",
      }));
      localStorage.setItem("login", JSON.stringify("logg in"));
      setTimeout(() => {
        history.push("/home")
      },1500)
    }
  };
  // submit functon
  const submitHandler = (e) => {
    e.preventDefault();
    setShowError(true);
    console.log(form);
    setError({
      empty: "",
      email: "",
      length: "",
      loggedIn: "",
      upperCase: "",
      lowerCase: "",
      number: "",
      specialCharacter: "",
    });
    // blank email and password
    if (email == "" || password == "") {
      setError((error) => ({
        ...error,
        empty: "please fill out all relevant sections",
      }));
      flag = false;
    } else {
      flag = true;
    }
    // invalid email
    if (!re.test(email)) {
      setError((error) => ({
        ...error,
        email: "Not an valid email",
      }));
      flag = false;
    } 
    // password length
    if (password.length < 8) {
      setError((error) => ({
        ...error,
        length: "Password length should be min 8 character",
      }));
      flag = false;
    } 
    // upper
    if (password.search(/[A-Z]/) < 0) {
      setError((error) => ({
        ...error,
        upperCase: "password should conntain 1 uppercase",
      }));
      flag = false;
    } 
    // lower
    if (password.search(/[a-z]/) < 0) {
      setError((error) => ({
        ...error,
        lowerCase: "password should conntain 1 lowerCase",
      }));
      flag = false;
    } 
    // number
    if (password.search(/[0-9]/) < 0) {
      setError((error) => ({
        ...error,
        number: "password should conntain 1 number",
      }));
      flag = false;
    } 
    // special char
    if (!special.test(password)) {
      setError((error) => ({
        ...error,
        specialCharacter: "password should conntain 1 specialCharacter",
      }));
      flag = false;
    } 

   
    console.log(flag);
    logIn();
  };
  return (
    <div className="form">
      <form action="submit">
        <h1>Login</h1>
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          value={form.email}
          
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onClick={() => setShowError(false)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          onClick={() => setShowError(false)}
        />
        <button onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
      <div className={`errors ${showError ? "show" : "hide"}`}>
        <p>{error.empty}</p>
        <p>{error.email}</p>
        <p>{error.length}</p>
        <p>{error.upperCase}</p>
        <p>{error.lowerCase}</p>
        <p>{error.number}</p>
        <p>{error.specialCharacter}</p>
        <h3 className="green" style={{ color: "green" }}>
          {error.loggedIn}
        </h3>
      </div>
    </div>
  );
}

export default Login;
// nair.akshay98@gmail.com
