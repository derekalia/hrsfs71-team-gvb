import React from 'react';
import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import Home from './Home.jsx';
import CreateGame from './CreateGame.jsx';
import Game from './Game.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        loggedin: false,
        username: 'Bob'
      }
    };
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
        <div>
          <p>Welcome to our game {this.state.user.username}!</p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signip</Link></li>
            <li><button onClick={this.logOut}>Logout</button></li>
          </ul>

          <hr/>

          {/*<Route exact path='/' render={() => <Home /> } />*/}
          <Route exact path='/' render={() => {
            return this.state.user.loggedin ? <Redirect to='/home' /> : <Redirect to='/login' />;
          }}/>
          <Route path='/home' component={Home}/>
          <Route path='/login' render={() => <Login login={this.login}/>} />
          <Route path='/signup' component={Signup}/>
          <Route path='/creategame' render={() => <CreateGame user={this.state.user}/>} />
          <Route path='/game' render={() => {
            return (this.state.user.loggedin) ? <Game user={this.state.user.username} /> : <Redirect to='/login'/>;
          }}/>
          <Route path='/game/vote' render={() => <Vote user={this.state.user.username}/>}/>          
        <Game username={this.state.user.username}/>
        </div>
        
      </Router>
    );
  }
}

export default App;