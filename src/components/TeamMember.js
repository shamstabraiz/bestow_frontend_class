import React from "react";
import { Image } from "react-bootstrap";
import { FacebookRounded, Instagram, Twitter } from "@mui/icons-material";

function TeamMember({ name, job, image, facebook, instagram, twitter }) {
  return (
    <>
      <div
        className="p-4"
        style={{ border: "1px solid rgba(0,0,0,.125) ", borderRadius: ".25rem", backgroundColor: "#fff" }}
      >
        <Image src={image} height={"250"} width={"250"} roundedCircle="true" />
        <h5 className="p-4 pb-0" style={{ fontWeight: "900px", textAlign: "center" }}>
          {name}
        </h5>
        <h6 className="p-1" style={{ textAlign: "center" }}>
          {job}
        </h6>
        <div
          className="icons"
          style={{ display: "flex", justifyContent: "space-between ", marginRight: "20%", marginLeft: "20%" }}
        >
          <a href={facebook ? `https://facebook.com/${facebook}` : "https://facebook.com/"}>
            <FacebookRounded fontSize="large" color={"primary"} />
          </a>
          <a href={instagram ? `https://instagram.com/${instagram}` : "https://instagram.com/"}>
            <Instagram fontSize="large" color="blue" />
          </a>
          <a href={twitter ? `https://twitter.com/${twitter}` : "https://twitter.com/"}>
            <Twitter fontSize="large" color="blue" />
          </a>
        </div>
      </div>
    </>
  );
}

export default TeamMember;
