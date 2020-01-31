import React from "react";
import Card from "react-bootstrap/Card";

export default function UserCard(props) {
  return props.userData && getUserCard(props.userData);
}

function getUserCard(userData) {
  return (
    <Card bg="light" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={userData.avatar_url} />
      <Card.Body>
        <Card.Title>{userData.name}</Card.Title>
        <Card.Text>
          <Card.Link target="_new" href={userData.html_url}>
            {userData.html_url}
          </Card.Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small>{userData.created_at}</small>
      </Card.Footer>
    </Card>
  );
}
