var options = {
  isAutoFull: false,
};

// 从 storage 中读取配置，如果没有配置，则初始化为默认值
function initOptions(callback) {
  // chrome.storage.sync.get(null, function(data) {
  //   $.extend(options, data);
  //   chrome.storage.sync.set(options);
  //   callback && callback();
  // });
}

// 监听设置项的变化
// chrome.storage.onChanged.addListener(function(changes) {
//   for (var name in changes) {
//     var change = changes[name];
//     options[name] = change.newValue;
//   }
// });
