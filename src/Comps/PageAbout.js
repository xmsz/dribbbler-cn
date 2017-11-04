import React from 'react';

const goWebsite = () => {
  chrome.tabs.create({ url: 'http://www.zcool.com.cn/u/940716' });
};

const PageAbout = () => (
  <div className="page-about">
    <div className="left">
      <i className="icon" />
    </div>
    <div className="right">
      <h2 className="title">
        Dribbble逐浪儿<i className="version">V 0.1.0</i>
      </h2>
      <h4 className="desc">帮助Dribbble中国区用户拥有更好浏览体验</h4>
      <p className="intro">
        希望你会喜欢这个作品，如果有任何问题可以
        <br />
        <span className="a" href="" onClick={goWebsite}>
          给我留言
        </span>
      </p>
      <footer>
        <div className="email">
          联系我的邮箱：<b>137819866@qq.com</b>
        </div>
      </footer>
    </div>
  </div>
);

export default PageAbout;
