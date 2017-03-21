import React from 'react';
import { Link } from 'react-router-dom';
import AssignRole from './AssignRole.jsx';
import Game from './Game.jsx';
import Timer from 'react-countdown-clock';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userArray: this.props.userArray,
      showRole: false,
      role: false,
      showGame: false,
      playerID: this.props.props.playerID,
      
    };
    // this.props.socket.on('updateArray', (array) => { this.setState({ userArray: array }); console.log('Array Updated To:', this.state.userArray); });
    this.props.socket.on('updateArray', (userArray) => {
      this.setState({ userArray: userArray }); console.log('ready to start!', userArray);
    });
    this.props.socket.on('role', (roleObj) => {
      this.setState({role: roleObj});
      console.log('roleObj', this.state.role);
      this.setState({showRole: true});

    });
    this.props.socket.on('setPlayerID', (id) => { this.setState({ playerID: id }); console.log('yo dawg', this.state.playerID); });  


    this.joinGame = this.joinGame.bind(this);

  }

  joinGame() {
    console.log('join game button clicked');
    this.props.socket.emit('joinedGame');
  }

  showCard() {
    return ( <AssignRole props={this.state} /> ); 
  }

  render() {    
    console.log('this is my playerid ', this.state.playerID);
    console.log('this is my props ', this.props);
    return (
      
      <div>
        { this.state.showRole ? 
         <div><AssignRole userArray={this.state.userArray} roleObj={this.state.role} /> <Timer seconds={10}
            color="#000"
            alpha={0.9}
            size={40}
            onComplete={()=>{ this.setState({showGame: true, showRole: false}); }} /></div> : <div><button onClick={this.joinGame}>Join Game</button></div> }        
         
         {this.state.showGame ? <Game socket={this.props.socket} playerID={this.state.playerID} name={this.props.props.user.username} userArray={this.state.userArray} /> : <div></div>}
         
         
      </div>
    );
  } 
}

export default Home;