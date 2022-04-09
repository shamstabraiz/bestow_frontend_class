import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
function BlogGrid({ props, darkMode }) {
  return (
    <div className="pb-5">
      <Card bg={darkMode ? `dark` : `Light`} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} height={190} width={280} style={{ borderRadius: ".5rem" }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>
          <Button variant="primary">
            <Link className={darkMode ? `darkmodeText` : `lightmodeText`} to="/blog" stst={{ id: 123 }}>
              Go somewhere
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BlogGrid;
