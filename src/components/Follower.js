import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const Follower = props => {

  return (
    <Card className="follower-card">
      <CardImg top width="100%" src={props.data.avatar_url} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.data.login}</CardTitle>
      </CardBody>
    </Card>
  )
}

export default Follower;
