import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import { store } from "../redux/store";

function HeaderAvatar({ darkMode, profile }) {
  return (
    <>
      <Image width={30} height={30} src={profile.profilePic} roundedCircle={"true"} style={{ marginRight: "10px" }} />
      <Dropdown>
        <Dropdown.Toggle
          className={darkMode ? `darkmodeText` : `lightmodeText`}
          variant=""
          id="dropdown-basic"
        ></Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default HeaderAvatar;
