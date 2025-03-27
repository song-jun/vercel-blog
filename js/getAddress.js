/*
 * @Description:
 * @Version:
 * @Autor: MrSong
 * @Date: 2022-07-29 15:16:53
 * @LastEditors: MrSong
 * @LastEditTime: 2022-08-04 21:36:41
 */

let timer, flag, timeout = null, addressJson = null;

import $ from "jquery";
export const getAddress = ({
  path,
  title
}) => {
  if (!$) return;
  // $.getScript("http://pv.sohu.com/cityjson", () => {
  //   let cip = returnCitySN.cip;
  //   let cid = returnCitySN.cid;
  //   let cname = returnCitySN.cname;
  //   function print() {
  //     console.group("🚀", "开始")
  //     console.log("cip", cip);
  //     console.log("cid", cid);
  //     console.log("cname", cname);
  //     console.log("path", path);
  //     console.log("title", title);
  //     console.groupEnd("🚀", "END");
  //   }
  //   throttle(print, 5000)
  // });
  setTimeout(() => {
    return;
    let myTimer = setInterval(() => {
      if (returnCitySN) {
        addressJson = returnCitySN;
        clearInterval(myTimer)
      }
    }, 1000)
  }, 10000);
  if (addressJson) {
    let cip = addressJson.cip;
    let cid = addressJson.cid;
    let cname = addressJson.cname;
    function print() {
      console.group("🚀", "开始")
      console.log("cip", cip);
      console.log("cid", cid);
      console.log("cname", cname);
      console.log("path", path);
      console.log("title", title);
      console.groupEnd("🚀", "END");
    }
    throttle(print, 5000)
  }
};

/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func, wait = 500, immediate = true) {
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(() => {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(() => {
        flag = false
        typeof func === 'function' && func();
      }, wait);
    }
  }
};
/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
function debounce(func, wait = 500, immediate = false) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}