import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (       
      <div style={{ display: 'flex', flexDirection: 'row' }}>         
        { this.props.showVotes ? <div style={{ display: 'flex', alignSelf: 'center', alignContent: 'center', alignItems: 'center', flex: 1, border: '2px solid grey', borderRadius: 4, padding: 6, margin: 6, backgroundColor: this.props.roundVote ? 'green' : 'red' }}>
          <span style={{ flex: 1, textAlign: 'center', fontSize: 20, color: 'white' }} >{this.props.roundVote ? 'PASS' : 'FAIL' }</span>
        </div> : <div></div>}
        <div style={{ display: 'flex', flex: 7, border: '2px solid grey', borderRadius: 4, padding: 6, margin: 6, backgroundColor: this.props.selected ? 'lightblue' : 'white' }} onClick={() => { this.props.isPicker(this.props.userID); }}>
          <div style={{ flex: .5 }}><img src='https://api.adorable.io/avatars/120/cat%40adorable.io' style={{ borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, width: '100%' }} /></div>
          <div style={{ flex: 1, alignContent: 'center', }} style={{ paddingLeft: 10, flex: 8, alignSelf: 'center', alignContent: 'center' }} >
            <span style={{ fontSize: 20 }}>{this.props.userID} -- {this.props.username}</span>
          </div>
        </div>
        <div style={{ display: 'flex', flex: .5, border: '2px solid white', borderRadius: 6, padding: 6, margin: 6, backgroundColor: 'white' }}>
          <span style={{ width: 50, alignSelf: 'center', alignContent: 'center', fontSize: 16 }} >{this.props.pickerID === this.props.userID ? 'PICKER' : ''}</span>
        </div>
      </div>
    );
  }

}

export default Player;