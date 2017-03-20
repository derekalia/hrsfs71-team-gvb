import React from 'react';
import { Link } from 'react-router-dom';
import AssignRole from './AssignRole.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray: [],
      showRole: false,
      role: false
    };
    this.props.socket.on('updateArray', (array) => { this.setState({ userArray: array }); console.log('Array Updated To:', this.state.userArray); });
    this.props.socket.on('readyToStart', (userArray) => { 
      this.setState({ userArray: userArray });
      console.log('ready to start!');
    });
    this.props.socket.on('role', (roleObj) => {
      this.setState({role: roleObj});
      console.log('roleObj', this.state.role);
      this.setState({showRole: true});

    });
    this.joinGame = this.joinGame.bind(this);

  }

  joinGame() {
    console.log('join game button clicked');
    this.props.socket.emit('joinedGame');
  }

  render() {
    return (
      <div>
        { this.state.showRole ? <AssignRole userArray={this.state.userArray} roleObj={this.state.role} /> : <div><button onClick={this.joinGame}>Join Game</button></div> }
        {/*<div><Link to='/creategame'>Create Game</Link></div>*/}
      </div>
    );
  } 
}

export default Home;