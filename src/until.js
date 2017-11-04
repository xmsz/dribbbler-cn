const isChrome = !(typeof chrome.storage === 'undefined');
const localStore = isChrome ? chrome.storage.sync : localStorage;

console.log(isChrome);
/**
 * 
 * 本地数据库操作
 * 
 * @export
 * @class userStore
 */
export class userStore {
  static get = (key = null) => {
    return new Promise((rs, rj) => {
      if (isChrome) {
        chrome.storage.sync.get(key, function(data) {
          rs(data);
        });
      } else {
        if (key === null) {
          rs({
            isAutoFull: localStore.getItem('isAutoFull') === 'true',
            version: localStore.getItem('version'),
          });
        } else {
          rs(localStore.getItem(key));
        }
      }
    });
  };
  static set = data => {
    return new Promise((rs, rj) => {
      if (isChrome) {
        chrome.storage.sync.set(data, function() {
          rs('ok');
        });
      } else {
        for (var key in data) {
          localStore.setItem(key, data[key]);
        }
        rs('ok');
      }
    });
  };
}

export function initStorage() {
  return new Promise((rs, rj) => {
    if (isChrome) {
      userStore.get().then(res => {
        userStore.set(res).then(() => {
          rs('ok');
        });
      });
    } else {
      userStore
        .set({
          isAutoFull: false,
          version: '0.1.0',
        })
        .then(() => {
          rs('ok');
        });
    }
  });
}
