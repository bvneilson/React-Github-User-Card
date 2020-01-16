import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const UserCard = props => {

  return (
    <Card className="user-card">
      <CardImg top width="100%" src={props.data.avatar_url} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.data.name}</CardTitle>
        <CardSubtitle>{props.data.login}</CardSubtitle>
        <CardText>{props.data.location}</CardText>
      </CardBody>
    </Card>
  )
}

export default UserCard;
