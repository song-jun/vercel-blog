/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2020-08-10 10:14:16
 * @LastEditors: MrSong
 * @LastEditTime: 2020-08-11 12:10:12
 */
// 最好不要在本地访问页面，以免造成多域名重复推送问题
(function() {
  // return;
  var bp = document.createElement("script");
  var curProtocol = window.location.protocol.split(":")[0];
  if (curProtocol === "https") {
    bp.src = "https://zz.bdstatic.com/linksubmit/push.js";
  } else {
    bp.src = "http://push.zhanzhang.baidu.com/push.js";
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();