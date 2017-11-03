import React, { Component } from 'react';
import PageAbout from './PageAbout';

export default class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: false,
    };
  }

  chooseSwiper() {
    this.setState({ choose: !this.state.choose });
  }

  render() {
    return (
      <div className="pop-right">
        <div className="page-setting">
          <h3 className="list-h3">体验设置</h3>
          <div className="list-ul">
            <div className="list-li">
              <div className="left">
                <b className="title">自动放大图片</b>
                <p className="desc">作品详情页采用较大的展示区域</p>
              </div>
              <div className="right">
                <div
                  className={`list-switch ${this.state.choose && 'choose'}`}
                  onClick={this.chooseSwiper.bind(this)}
                >
                  <div className="swiper" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageAbout />
      </div>
    );
  }
}
