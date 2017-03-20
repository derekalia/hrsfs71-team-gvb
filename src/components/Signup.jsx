import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// NOTE: It is simpler to take care of login only in login page, so 
// for MVP, user is not logged in immediately upon signup. Must click
// on 'login' button. 

class Signup extends React.Component {
  constructor({pathname}) {
    super({pathname});
    this.state = {
      user: {  
        username: '',
        password: ''
      },
      validationMsg: '',
      validationClass: 'success'
    };
    this.updateState = this.updateState.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateState (e) {
    let updatedUser = Object.assign({}, this.state.user, {[e.target.name]: e.target.value});
    console.log('updatedUser: ', updatedUser);
    this.setState({user: updatedUser}, () => {
      console.log('this.state.user post setState:', this.state.user);
    });
  } 
  
  submit () {
    let localThis = this;
    axios.post('/db/users', this.state.user)
    .then((response) => {
      if (response.status === 201) {
        this.setState({
          validationMsg: 'User ' + this.state.user.username + ' successfully added',
          validationClass: 'successMsg'
        });
      }
    })
    .catch(function (error) {
      localThis.setState({
        validationMsg: 'Sign-up failed. User might already exists. Go to login or try another username.',
        validationClass: 'errorMsg'
      });
      console.log(error);
    });
    this.setState({username: '', password: ''});
  }

  render () {
    return (
      <div>
        <div id = 'signupPage'>
          <h2>Sign-Up</h2>
          <div>
            <span>Username</span>
            <input type='text' onChange={this.updateState} name='username' />
          </div>
          <div>
            <span>Password</span>
            <input type='text' onChange={this.updateState} name='password' />
          </div>
        </div>
        <div>
          <p className={this.state.validationClass}>{this.state.validationMsg}</p>
          <button onClick={this.submit}>Signup</button>
          <Link to='/login'>Go to Login</Link>
        </div>
      </div>
    );
  }
}   

export default Signup;