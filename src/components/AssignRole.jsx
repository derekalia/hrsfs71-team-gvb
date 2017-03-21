import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Timer from 'react-countdown-clock';
// https://github.com/pughpugh/react-countdown-clock

const GOOD_IMG = 'http://emojipedia-us.s3.amazonaws.com/cache/7e/1a/7e1a5de60d10ec73d7f3cfc295413270.png';
const BAD_IMG = 'http://emojipedia-us.s3.amazonaws.com/cache/1f/96/1f96347d3df271789cfbd2505cb1a103.png';

class AssignRole extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRole: true,
      // allUsers: props.userArray,
      roleImg: (props.roleObj.isBad) ? BAD_IMG : GOOD_IMG,
      // isBad: false,
      bads: (props.roleObj.isBad) ? props.roleObj.bads : []
    };

    this.hideRole = this.hideRole.bind(this);
    this.tempImg = this.tempImg.bind(this);
  }
  
  hideRole() {
    this.setState({showRole: false});
  }

  tempImg() {
    return this.state.showRole ? 
      <img src={this.state.roleImg}/> : 
      <div>
        <div>Time's up. Remember your role</div>
        <Link to='/game'>Start Game</Link>
      </div>;
  }

  render () {
    // console.log('role in assign role', this.state.role);
    return (
      <div>
        <div>{this.tempImg()}</div>
      </div>
    );
  }
}

export default AssignRole;
