import React, { Component } from 'react';
import Left from './Comps/Left';
import Right from './Comps/Right';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCurrent: 0,
    };
  }

  componentWillMount() {
    this.getStorage.bind(this);
  }

  getStorage() {
    console.log(typeof chrome === 'undefined');
    chrome.storage.sync.get(null, function(items) {
      console.log('Settings retrieved', JSON.stringify(items));
    });
  }
  changeNav(idx) {
    this.setState({ navCurrent: idx });
    console.log(typeof chrome === 'undefined');
    chrome.storage.sync.get(null, function(items) {
      console.log('Settings retrieved', JSON.stringify(items));
    });
  }

  render() {
    return (
      <div id="container" className={`switch-${this.state.navCurrent}`}>
        <Left
          navCurrent={this.state.navCurrent}
          changeNav={this.changeNav.bind(this)}
        />
        <Right />
      </div>
    );
  }
}

export default App;
