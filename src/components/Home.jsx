import React from 'react';
import { Link } from 'react-router-dom';
import AssignRole from './AssignRole.jsx';
import Game from './Game.jsx';
import Timer from 'react-countdown-clock';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray: [],
      showRole: false,
      role: false,
      showGame: false
    };
    // this.props.socket.on('updateArray', (array) => { this.setState({ userArray: array }); console.log('Array Updated To:', this.state.userArray); });
    this.props.socket.on('updateArray', (userArray) => { 
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

  showCard() {
    return ( <AssignRole userArray={this.state.userArray} roleObj={this.state.role} /> ); 
  }

  render() {
    return (
      
      <div>
        { this.state.showRole ? 
         <div><AssignRole userArray={this.state.userArray} roleObj={this.state.role} /> <Timer seconds={10}
            color="#000"
            alpha={0.9}
            size={40}
            onComplete={()=>{ this.setState({showGame: true}); }} /></div> : <div><button onClick={this.joinGame}>Join Game</button></div> }        
         
         {this.state.showGame ? <Game socket={this.props.socket} username={this.props.username} /> : <div></div>}
         
         
      </div>
    );
  } 
}

export default Home;