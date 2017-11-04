import React, { Component } from 'react';

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navArr: [
        {
          desc: '个性设置',
          name: 'setting',
        },
        {
          desc: '关于',
          name: 'about',
        },
      ],
    };

    this.checkUpdata = this.checkUpdata.bind(this);
  }

  checkUpdata() {
    chrome.tabs.create({ url: 'http://www.zcool.com.cn/u/940716' });
  }

  render() {
    const List = this.state.navArr.map((it, idx) => {
      return (
        <li
          onClick={() => this.props.changeNav(idx)}
          className={`${this.props.navCurrent === idx && 'on'}`}
          key={idx}
        >
          <i className={`icon-${it.name}`} />
          <span className="desc">{it.desc}</span>
        </li>
      );
    });

    return (
      <div className="pop-left">
        <ul>{List}</ul>
        <div className="button-update" onClick={this.checkUpdata}>
          检查更新
        </div>
      </div>
    );
  }
}

export default Left;
