import React from 'react';
import { Link } from 'react-router-dom';

const CreateGame = (props) => {
  return (
    <div>
      <h3>Welcome to our game {props.user.username}!</h3>
      <div>TODO: Add inputs tags and buttons for game creation</div>
      <Link to='/game'>Play!</Link>
    </div>
  );
};

export default CreateGame;