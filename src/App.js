import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Left from './Comps/Left';
import Right from './Comps/Right';
import './App.css';
import { initStorage, userStore } from './until.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCurrent: 0,
      settingData: {},
    };

    this.setIsAutoFull = this.setIsAutoFull.bind(this);
  }

  getChildContext() {
    return {
      settingData: this.state.settingData,
      setIsAutoFull: this.setIsAutoFull,
    };
  }

  setIsAutoFull() {
    const isAutoFull = !this.state.settingData.isAutoFull;
    userStore.set({ isAutoFull }).then(res => {
      this.setState({
        settingData: {
          isAutoFull,
        },
      });
    });
  }

  componentWillMount() {
    initStorage().then(() => {
      userStore.get().then(res => {
        this.setState({ settingData: res });
      });
    });
  }

  changeNav(idx) {
    this.setState({ navCurrent: idx });
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

App.childContextTypes = {
  settingData: PropTypes.object,
  setIsAutoFull: PropTypes.func,
};
export default App;
