import React from 'react';
import Follower from './Follower.js';

const Followers = props => {

  if (!props.data) {
    return <h2>Loading...</h2>;
  }

  return (
    props.data.map((follower, index) => {
      return <Follower data={follower} key={index} />
    })
  )
}

export default Followers;
