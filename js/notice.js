/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2022-08-06 15:28:36
 * @LastEditors: MrSong
 * @LastEditTime: 2022-08-07 10:26:49
 */
export const IsPC = () => {
  let userAgentInfo = navigator.userAgent;
  let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  let flag = true;
  for (let i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) { flag = false; break; }
  }
  return flag;
}
export const initNotice = (stopSound, playSound) => {
  function createNotice() {
    let ele = document.createElement("div");
    //给元素添加属性
    if (IsPC()) {
      let myNotice = document.getElementById("myNotice");
      if (myNotice) return;
      ele.id = "myNotice";
      ele.innerHTML = `亲，按“空格键”可暂停或播放背景音乐哦...<span class='delIco'></span>`
    } else {
      let mobileNotice = document.getElementById("mobileNotice");
      if (mobileNotice) return;
      ele.id = "mobileNotice";
      ele.innerHTML = `<img src="/assets/img/pause.png" alt="" srcset="">`
    }
    document.body.appendChild(ele);
    clickEvent();
  }
  function deleteNotice() {
    if (IsPC()) {
      let delIco = document.getElementsByClassName("delIco");
      let myNotice = document.getElementById("myNotice");
      delIco[0].onclick = () => {
        document.body.removeChild(myNotice);
      }
    } else {

    }
  }
  function clickEvent() {
    let mobileNotice = document.getElementById("mobileNotice");
    let isPlay = true;
    if (!mobileNotice) return;
    mobileNotice.onclick = () => {
      if (isPlay) {
        mobileNotice.innerHTML = `<img src="/assets/img/play.png" alt="" srcset="">`
        stopSound();
      } else {
        mobileNotice.innerHTML = `<img src="/assets/img/pause.png" alt="" srcset="">`
        playSound();
      }
      isPlay = !isPlay
    }
  }
  createNotice();
  deleteNotice();
}