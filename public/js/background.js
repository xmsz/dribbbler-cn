chrome.webRequest.onBeforeRequest.addListener(
  function(request) {
    var url = request.url
      .replace('googleapis.com', 'lug.ustc.edu.cn')
      .replace('cdn.dribbble.com', 'yutou.oss-cn-hangzhou.aliyuncs.com');
    return { redirectUrl: url };
  },
  {
    urls: ['*://ajax.googleapis.com/*', '*://cdn.dribbble.com/*'],
  },
  ['blocking'],
);

chrome.browserAction.onClicked.addListener(function(tab) {
  // 扩展向内容脚本发送消息
  chrome.tabs.sendMessage(
    tab.id,
    {
      greeting: 'hello to content script!',
    },
    function(response) {
      console.log(response);
    },
  );
});

initOptions(function() {
  chrome.storage.sync.get(null, function(items) {
    console.log('Settings retrieved', items);
  });
});
