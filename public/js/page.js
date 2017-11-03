(function($) {
  /**
   * 兼容 MutationObserver
   */
  const MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;

  /**
   * 图片缩放
   */
  const imgsShowReset = () => {
    // 加载大图
    $('.single-img img').map(function(e) {
      this.src = this.src.replace(/_1x./g, '.');
    });
    $('.single-img source').map(function() {
      this.srcset = this.srcset.replace(/_1x./g, '.');
    });

    // 默认大图显示
    options.isAutoFull && $('.main-shot').addClass('full-800');
  };

  /**
   * 弹层事件
   */
  const shotOverlay = () => {
    // 观察是否弹层

    const isOpenPic = new MutationObserver(function(mutations) {
      mutations.forEach(mutation => {
        console.log(mutation.type);
        imgsShowReset();
      });
    });

    isOpenPic.observe(document.querySelector('.shot-overlay'), {
      attributes: true,
    });
  };

  /**
   * 详情页事件
   */
  const pageDetailMethods = () => {
    imgsShowReset();
  };

  /**
   * 排行页面
   */
  const pageShotsMethods = () => {
    shotOverlay();
  };

  /**
   * 首页页面
   */
  const pageHomeMethods = () => {
    shotOverlay();
  };

  /**
   * 判断页面
   */
  const findPages = () => {
    const url = window.location.pathname;
    const pageArr = [
      {
        reg: url.indexOf('shots/') > -1,
        name: '作品页面',
        func: () => {
          pageDetailMethods();
        },
      },
      {
        reg: url.indexOf('shots') > -1,
        name: '个人关注页面',
        func: () => {
          pageShotsMethods();
          console.log('个人关注页面');
        },
      },
      {
        reg: url === '/',
        name: '首页',
        func: () => {
          pageHomeMethods();
          console.log('首页');
        },
      },
      {
        reg: true,
        name: '其他页面',
        func: () => {
          console.log('其他页面');
        },
      },
    ];
    console.log(pageArr);
    pageArr.find(it => it.reg).func();
  };

  initOptions(function() {
    chrome.storage.sync.get(null, function(items) {
      console.log('Settings retrieved', items);
    });
    findPages();
  });
})(Zepto);

// 接受通信
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.greeting === 'hello to content script!') {
    sendResponse({ data: 'ok' });
  } else {
    sendResponse({ dat: 'resError' });
  }
});
