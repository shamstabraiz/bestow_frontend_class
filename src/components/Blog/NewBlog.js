import axios from "axios";
import jsCookie from "js-cookie";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { baseurl } from "../../config/config";
import { store } from "../../redux/store";

function NewBlog({ darkMode }) {
  const [user, setUser] = useState({});
  const [blog, setBlog] = useState({});
  const [created, setCreated] = useState(false);

  useEffect(() => {
    const profile = store.getState().value;
    if (profile !== {} || profile !== undefined) {
      setUser(profile);
    }
  }, []);

  function handleChange(e) {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const token = jsCookie.get("token");
    axios.post(baseurl + "/api/blog", blog, { headers: { authorization: token } }).then((res) => {
      if (res.status == 200) {
        setCreated(true);
      } else {
        alert("sorry ther has been an error creating your blog");
      }
    });
  }

  return (
    <>
      {created ? (
        <>
          <h1>Created SucessFully</h1>
          <button className="btn-primary" onClick={() => setCreated(false)}>
            Add New One
          </button>
        </>
      ) : (
        <div style={{ width: "100%" }} className={darkMode ? `darkmode` : `lightmode`}>
          <h3
            style={{
              marginLeft: "60px",
              paddingTop: "40px",
            }}
            className={darkMode ? `darkmode` : `lightmode`}
          >
            Create New Blog
          </h3>
          <Form
            className={darkMode ? `darkmode` : `lightmode`}
            onChange={(e) => handleChange(e)}
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
              marginLeft: "70px",
              marginTop: "50px",
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Title</Form.Label>
              <Form.Control type="Text" name="title" placeholder="Enter Title" style={{ width: "400px" }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Short Description</Form.Label>
              <Form.Control type="Text" name="shortdescription" placeholder="Description" style={{ width: "400px" }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="Text"
                name="content"
                placeholder="Your Blog"
                style={{ height: "200px", width: "80%" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Featured Image</Form.Label>
              <input className="mb-3 form-control" type="file" />
            </Form.Group>
            <Button
              style={{ width: "80px", marginBottom: "10px" }}
              onClick={(e) => handleSubmit(e)}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default NewBlog;
