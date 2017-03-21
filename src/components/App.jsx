import React from 'react';
import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import CreateGame from './CreateGame.jsx';
import Game from './Game.jsx';
import SocketIOClient from 'socket.io-client';

var socket = SocketIOClient('http://localhost:3000');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        loggedin: false,
        username: 'Bob'
      }
    };
    socket.on('updateArray', (array) => { this.setState({ resultsArray: array }); console.log('Array Updated To:', this.state.resultsArray); });
    this.login = this.login.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  login(userName) {
    this.setState({
      user: {
        loggedin: true,
        username: userName
      }
    });
    socket.emit('updateUsername', userName);
  }

  logOut() {
    this.setState({
      user: {
        loggedin: false,
        username: ''
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="header"><header>Welcome to our game {this.state.user.username}!</header></div>
          <div>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/signup">Signup</Link></div>
            <div><button onClick={this.logOut}>Logout</button></div>
          </div>

          <hr/>

          {/*<Route exact path='/' render={() => <Home /> } />*/}
          <Route exact path='/' render={() => {
            return this.state.user.loggedin ? <Redirect to='/home' /> : <Redirect to='/login' />;
          }}/>
          <Route path='/home' render={() => {
            return <Home socket={socket} username={this.state.user.username}/>;
          }}/>
          <Route path='/login' render={() => <Login login={this.login}/>} />
          <Route path='/signup' component={Signup}/>
          <Route path='/creategame' render={() => <CreateGame user={this.state.user}/>} />
          <Route path='/game' render={() => {
            return (this.state.user.loggedin) ? <Game username={this.state.user.username} socket={socket} /> : <Redirect to='/login'/>;
          }}/>
          <Route path='/game/vote' render={() => <Vote user={this.state.user.username}/>}/>          
        {/*<Game socket={socket} username={this.state.user.username}/>*/}
        </div>
        
      </Router>
    );
  }
}

export default App;