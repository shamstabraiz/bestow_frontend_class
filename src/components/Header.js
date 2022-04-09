import React, { useEffect, useState } from "react";
import menuu from "../config/menu.json";
import MUISwitch from "./materialUI/MUISwitch";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useRive, useStateMachineInput } from "rive-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Outlet } from "react-router-dom";
import { store } from "../redux/store";
import HeaderAvatar from "./HeaderAvatar";
import jsCookie from "js-cookie";
import axios from "axios";
import { baseurl } from "../config/config";

function Header({ darkMode, darkToggle }) {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const token = jsCookie.get("token");
    if (token !== undefined || token !== null) {
      axios.post(baseurl + "/api/verify", { token: token }).then((res) => {
        store.dispatch({ type: "user_save", payload: res.data });
        setProfile(res.data);
      });
    }
    if (store.getState().value !== {}) {
      const temp = store.getState().value;
      setProfile(temp);
    }
  }, []);
  const user = store.getState().value;

  const STATE_MACHINE_NAME = "state";
  const INPUT_NAME = "toggle";
  const { RiveComponent, rive } = useRive({
    src: "/1.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });
  const onClickInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);

  return (
    <>
      <Navbar bg={darkMode ? `dark darkmodeText` : `Light lightmodeText`} variant={darkMode ? `dark` : `Light`}>
        <Container>
          <Link className={darkMode ? `darkmodeText` : `lightmodeText`} to="/">
            <Navbar.Brand className={darkMode ? `darkmodeText` : `lightmodeText`}>Site Name</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            {menuu.map((item, index) => (
              <Nav.Link key={index}>
                <Link className={darkMode ? `darkmodeText` : `lightmodeText`} to={item.link}>
                  {item.name}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
          {/* <div style={{ height: "50px" }}>
            <RiveComponent
              onClick={() => {
                darkToggle();
                onClickInput.fire();
              }}
            />
          </div> */}
          {user.profilePic ? (
            <HeaderAvatar profile={profile} darkMode={darkMode} />
          ) : (
            <div className={darkMode ? `darkmodeText Avatar` : `lightmodeText Avatar`} style={{ display: "flex" }}>
              <div style={{ textAlign: "center", marginRight: "10px" }}>
                <Link className={darkMode ? `darkmodeText Avatar` : `lightmodeText Avatar`} to={"login"}>
                  Login
                </Link>
              </div>
            </div>
          )}
          <div style={{ height: "50px" }}>
            <p
              onClick={() => {
                darkToggle();
              }}
              style={{ paddingTop: "13% " }}
            >
              <MUISwitch defaultChecked />
            </p>
          </div>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
