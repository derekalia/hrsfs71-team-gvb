import React from 'react';
import ReactDOM from 'react-dom';
import Timer from 'react-countdown-clock';
// https://github.com/pughpugh/react-countdown-clock

const GOOD_IMG = 'http://emojipedia-us.s3.amazonaws.com/cache/7e/1a/7e1a5de60d10ec73d7f3cfc295413270.png';
const BAD_IMG = 'http://emojipedia-us.s3.amazonaws.com/cache/1f/96/1f96347d3df271789cfbd2505cb1a103.png';

class AssignRole extends React.Component {
  constructor({resultsArray, username}) {
    super({resultsArray, username});
    this.state = {
      showRole: true,
      allUsers: resultsArray,
      thisUser: username,
      isBad: false,
      otherBads: []
    };
    this.hideRole = this.hideRole.bind(this);
    this.tempImg = this.tempImg.bind(this);
    this.determineRole = this.determineRole.bind(this);
  }
  
  hideRole() {
    this.setState({showRole: false});
  }

  tempImg() {
    return this.state.showRole ? <img src={GOOD_IMG}/> : <div>Time's up. Remember your role</div>;
  }

  determineRole() {
    console.log('ResultsArray handed to AssignRolecomponent: ', this.allUsers);
    console.log('Username handed to AssignRolecomponent: ', this.thisUser);
    // loop through allUsers until finding thisUser
      // if a user isBad and is NOT thisUser, push that user to otherBads results
      // if user isBad and IS thisUser, set isBad to true
      // if user is not bad and IS thisUser, break from the loop
  }

  render () {
    return (
      <div>
        <div>
          {determineRole()}
          <Timer seconds={10}
            color="#000"
            alpha={0.9}
            size={40}
            onComplete={this.hideRole} />
        </div>
        <div>{this.tempImg()}</div>
      </div>
    );
  }
}

export default AssignRole;
