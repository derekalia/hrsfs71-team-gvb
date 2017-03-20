import React from 'react';
import ReactDOM from 'react-dom';
import Timer from 'react-countdown-clock';
// https://github.com/pughpugh/react-countdown-clock

const GOOD_IMG = 'http://emojipedia-us.s3.amazonaws.com/cache/7e/1a/7e1a5de60d10ec73d7f3cfc295413270.png';

class AssignRole extends React.Component {
  constructor({isGood, badGuys}) {
    super({isGood, badGuys});
    this.state = {
      showRole: true
    };
    this.hideRole = this.hideRole.bind(this);
    this.tempImg = this.tempImg.bind(this);
  }

  hideRole() {
    this.setState({showRole: false});
  }

  tempImg() {
    return this.state.showRole ? <img src={GOOD_IMG}/> : <div>Time's up. Remember your role</div>;
  }

  render () {
    return (
      <div>
        <div>
          <Timer seconds={10}
            color="#000"
            alpha={0.9}
            size={100}
            onComplete={this.hideRole} />
        </div>
        <div>{this.tempImg()}</div>
      </div>
    );
  }
}

export default AssignRole;

/*import ReactTimeout from 'react-timeout';

class Example extends React.Component {
  render() {
    return (
      <button
        onClick={() => this.props.setTimeout(5000)}>Click me!</button>
    );
  }
}
export default ReactTimeout(Example);*/
