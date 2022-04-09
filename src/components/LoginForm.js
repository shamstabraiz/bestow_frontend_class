import axios from "axios";
import jsCookie from "js-cookie";
import React, { useState } from "react";
import { Form, Card } from "react-bootstrap";
import { baseurl } from "../config/config";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../redux/store";

function LoginForm({ darkMode }) {
  let navigate = useNavigate();
  const [userInfo, setUserinfo] = useState({});
  function handle(e) {
    setUserinfo({ ...userInfo, [e.target.name]: e.target.value });
  }
  async function onSubmit(e) {
    e.preventDefault();
    await axios.post(baseurl + "/api/login", userInfo).then((res, err) => {
      if (res.status === 200) {
        jsCookie.set("token", res.data.token);
        var user = {
          email: res.data.email,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          profilePic: res.data.profilePic,
        };
        store.dispatch({ type: "user_save", payload: user });
        navigate("/");
      } else if (err) {
        alert(err);
      } else {
        alert("something Wrong");
      }
    });
  }
  return (
    <div
      className={darkMode ? `darkmode loginForm` : `lightmode loginForm`}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignContent: "flex-end",
        paddingRight: "6%",
        height: "100%",
        width: "100%",
      }}
    >
      <Card style={{ width: "440px", padding: "10px" }} >
        <h3 className="mb-3" style={{ textAlign: "center" }}>
          Login
        </h3>
        <Form style={{ display: "flex", flexDirection: "column", width: "100%" }} onChange={(e) => handle(e)}>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="email" name="email" className="form-control mb-3" required="true" />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            className="form-control mb-3"
            required="true"
          />
          <Link className="mb-3" to="/">
            Click Here To SignUp
          </Link>
          <button style={{ width: "100%", height: "40px" }} className="btn-primary" onClick={(e) => onSubmit(e)}>
            Login
          </button>
        </Form>
      </Card>
    </div>
  );
}

export default LoginForm;
