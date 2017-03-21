import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
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
    Axios.post('/db/login', this.state.user)
    .then((response) => {
      if (response.status === 200) {
        this.setState({
          validationMsg: this.state.user.username + ' has logged in successfully',
          validationClass: 'successMsg'
        });
        this.props.login(this.state.user.username);
      }
    });
    // .catch(function (error) {
    //   localThis.setState({
    //     validationMsg: 'Login failed. Please try again.',
    //     validationClass: 'errorMsg'
    //   });
    //   console.log(error);
    // });
  }

  render () {
    return (
      <div>
        <div id = 'loginPage'>
          <h2>Login Page</h2>
          <div>
            <span>Username: </span>
            <input type='text' onChange={this.updateState} name='username' />
          </div>
          <div>
            <span>Password: </span>
            <input type='text' onChange={this.updateState} name='password' />
          </div>
        </div>
        <div>
          <p className={this.state.validationClass}>{this.state.validationMsg}</p>
          <button onClick={this.submit}>Login</button>
          <Link to='/signup'>Go to Sign-up</Link>
        </div>
      </div>
    );
  }
}

export default Login;