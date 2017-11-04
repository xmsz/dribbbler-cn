import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageAbout from './PageAbout';

export class Right extends Component {
  constructor(props) {
    super(props);
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
                  className={`list-switch ${this.context.settingData
                    .isAutoFull && 'choose'}`}
                  onClick={this.context.setIsAutoFull}
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

Right.contextTypes = {
  settingData: PropTypes.object,
  setIsAutoFull: PropTypes.func,
};
export default Right;
