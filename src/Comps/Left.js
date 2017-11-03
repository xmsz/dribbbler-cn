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
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
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
        <div className="button-update">检查更新</div>
      </div>
    );
  }
}

export default Left;
