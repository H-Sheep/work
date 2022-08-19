// 热搜榜
var rank_list = document.querySelectorAll('#rank_list');
var rank_con = document.querySelector('.rank_con');

const hot = new XMLHttpRequest();
hot.responseType = 'json';
hot.open('GET','http://106.52.74.37:8000/getHotSearch');
hot.send();
hot.onreadystatechange = function(){
    if(hot.readyState ==4 ){
        // 判断状态码
        if(hot.status >=200 && hot.status <=300){
            // 将其转换为对象

            for(var i in hot.response.data.hotSearchData){
                
                rank_list[i].innerHTML = '<i>' + hot.response.data.hotSearchData[i].rank+ '</i>' + hot.response.data.hotSearchData[i].title;
                // console.log(rank_con.children);
                rank_con.children[0].children[i].children[1].innerHTML = hot.response.data.hotSearchData[i].title;
            }
        }else{
        }   
    }
}




// 轮播图部分
var images = document.querySelectorAll('.image');
var titles = document.querySelectorAll('.title');
var swipers = document.querySelectorAll('.swiper');
var bullets = document.querySelectorAll('.bullet');
const banner = new XMLHttpRequest();
banner.responseType = 'json';
banner.open('GET','http://106.52.74.37:8000/getSwiper');
banner.send();
banner.onreadystatechange = function(){
    if(banner.readyState ==4 ){
        // 判断状态码
        if(banner.status >=200 && banner.status <=300){
            // 滑块部分
            for(var i in banner.response.data.liveData.livePlay){
                images[i].children[0].children[0].src = banner.response.data.liveData.livePlay[i].imgSrc;
                images[i].children[0].href = banner.response.data.liveData.livePlay[i].link;
                titles[i].children[0].innerHTML = banner.response.data.liveData.livePlay[i].name;
                titles[i].children[0].href = banner.response.data.liveData.livePlay[i].link;
            }

            // 轮播图
            for(var i in banner.response.data.recommendData.recomendContent){
                bullets[i].href = banner.response.data.recommendData.recomendContent[i].link;
                bullets[i].innerHTML = banner.response.data.recommendData.recomendContent[i].title;
                swipers[i].children[0].href = banner.response.data.recommendData.recomendContent[i].link;
                swipers[i].children[0].children[0].src = banner.response.data.recommendData.recomendContent[i].imgSrc;
            }


        }else{
        }   
    }
}


// 今日热点部分
var today_image = document.querySelectorAll('.image');
var today_title = document.querySelectorAll('.title');
var brief = document.querySelector('.brief');
const today_hot = new XMLHttpRequest();
today_hot.responseType = 'json';
today_hot.open('GET','http://106.52.74.37:8000/getHotTopic');
today_hot.send();
today_hot.onreadystatechange = function(){
    if(today_hot.readyState ==4 ){
        // 判断状态码
        if(today_hot.status >=200 && today_hot.status <=300){
            brief.innerHTML = today_hot.response.data.hotTopicData[0].brief;
            for(var i in today_hot.response.data.hotTopicData){
                if(i == 9 ){
                    break;
                }
                today_title[parseInt(i)+12].children[0].innerHTML = today_hot.response.data.hotTopicData[i].title.text;
                today_title[parseInt(i)+12].children[0].href = today_hot.response.data.hotTopicData[i].title.link;
                today_image[parseInt(i)+12].children[0].href = today_hot.response.data.hotTopicData[i].title.link;
                today_image[parseInt(i)+12].children[0].children[0].src = today_hot.response.data.hotTopicData[i].img.src;
            }
                
            }
            
        }else{
        }   
    }


// 直播导视部分
var tv_img = document.querySelectorAll('.tv_img');
var tv_time = document.querySelectorAll('.tv_time');
var tv_brief = document.querySelectorAll('.tv_brief');

const tv = new XMLHttpRequest();
tv.responseType = 'json';
tv.open('GET','http://106.52.74.37:8000/getLiveGuide');
tv.send();
tv.onreadystatechange = function(){
    if(tv.readyState ==4 ){
        // 判断状态码
        if(tv.status >=200 && tv.status <=300){
           for(var i in tv.response.data){
                tv_img[i].children[0].href = tv.response.data[i].img.link;
                tv_img[i].children[0].children[0].src = tv.response.data[i].img.src;
                tv_img[i].children[0].children[1].innerHTML = tv.response.data[i].topic;
                tv_time[i].children[0].href = tv.response.data[i].img.link;
                tv_time[i].children[0].innerHTML = tv.response.data[i].time.startTime+'-'+tv.response.data[i].time.endTime
                tv_brief[i].children[0].href = tv.response.data[i].img.link;
                tv_brief[i].children[0].innerHTML = tv.response.data[i].itemName;
            }
            
        }else{
        }   
    }
}


// 看点部分
var view_con = document.querySelectorAll('.view_con');
var view_box = document.querySelector('.view_box');
const view = new XMLHttpRequest();
view.responseType = 'json';
view.open('GET','http://106.52.74.37:8000/getHighLight');
view.send();
view.onreadystatechange = function(){
    if(view.readyState ==4 ){
        // 判断状态码
        if(view.status >=200 && view.status <=300){
            // 将其转换为对象
            for(var i in view.response.data.navigation){
                view_box.children[1].children[i].innerHTML = view.response.data.navigation[i].text;
                view_box.children[1].children[i].href = view.response.data.navigation[i].link;
            }
            }else{     

            }   
            for(var i in view.response.data.highlightData){
                // console.log(view.response.data.highlightData);
                if(i == 36)break;

                view_con[i].children[0].children[0].children[0].src = view.response.data.highlightData[i].img.src;
                view_con[i].children[0].children[0].href = view.response.data.highlightData[i].img.link;
                view_con[i].children[1].children[0].children[0].innerHTML = view.response.data.highlightData[i].title.text;
                view_con[i].children[1].children[1].children[0].innerHTML = view.response.data.highlightData[i].keyword.text;
                view_con[i].children[1].children[0].children[0].href = view.response.data.highlightData[i].title.link;
                view_con[i].children[1].children[1].children[0].href = view.response.data.highlightData[i].keyword.link;

            }
            }else{     
                
            }  
}


// 央视大全
var channels = document.querySelectorAll('#channel');
var playimgs = document.querySelectorAll('.playimg');
var playmenu1 = document.querySelectorAll('.playmenu1');
var playmenu2 = document.querySelectorAll('.playmenu2');
var playmenu3 = document.querySelectorAll('.playmenu3');
var playmenu4 = document.querySelectorAll('.playmenu4');
var playmenu5 = document.querySelectorAll('.playmenu5');
var playmenu6 = document.querySelectorAll('.playmenu6');
var playmenu7 = document.querySelectorAll('.playmenu7');
var playmenu8 = document.querySelectorAll('.playmenu8');
var playmenu9 = document.querySelectorAll('.playmenu9');
var playmenu10 = document.querySelectorAll('.playmenu10');
var playmenu11 = document.querySelectorAll('.playmenu11');
var playmenu12 = document.querySelectorAll('.playmenu12');
var playmenu13 = document.querySelectorAll('.playmenu13');
var playmenu14 = document.querySelectorAll('.playmenu14');
var playmenu15 = document.querySelectorAll('.playmenu15');
var playmenu16 = document.querySelectorAll('.playmenu16');
var playmenu17 = document.querySelectorAll('.playmenu17');
var playmenu18 = document.querySelectorAll('.playmenu18');

const all_cctv = new XMLHttpRequest();
all_cctv.responseType = 'json';
all_cctv.open('GET','http://106.52.74.37:8000/getProgram');
all_cctv.send();
all_cctv.onreadystatechange = function(){
    if(all_cctv.readyState ==4 ){
        // 判断状态码
        if(all_cctv.status >=200 && all_cctv.status <=300){
            // 将其转换为对象
            for(var i in all_cctv.response.data.programData){
                playimgs[i].children[0].children[0].src = all_cctv.response.data.programData[i].img.src;
                
                channels[i].children[0].innerHTML = all_cctv.response.data.programData[i].name+'<br><i>'+all_cctv.response.data.programData[i].topic+'</i>'
                
            }
            for(var o in all_cctv.response.data.programData[0].programList){
                // console.log(all_cctv.response.data.programData[0].programList[o]);
                playmenu1[o].children[0].innerHTML = all_cctv.response.data.programData[0].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[1].programList){
                playmenu2[o].children[0].innerHTML = all_cctv.response.data.programData[1].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[2].programList){
                playmenu3[o].children[0].innerHTML = all_cctv.response.data.programData[2].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[3].programList){
                playmenu4[o].children[0].innerHTML = all_cctv.response.data.programData[3].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[4].programList){
                playmenu5[o].children[0].innerHTML = all_cctv.response.data.programData[4].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[5].programList){
                playmenu6[o].children[0].innerHTML = all_cctv.response.data.programData[5].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[6].programList){
                playmenu7[o].children[0].innerHTML = all_cctv.response.data.programData[6].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[7].programList){
                playmenu8[o].children[0].innerHTML = all_cctv.response.data.programData[7].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[8].programList){
                playmenu9[o].children[0].innerHTML = all_cctv.response.data.programData[8].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[9].programList){
                playmenu10[o].children[0].innerHTML = all_cctv.response.data.programData[9].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[10].programList){
                playmenu11[o].children[0].innerHTML = all_cctv.response.data.programData[10].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[11].programList){
                playmenu12[o].children[0].innerHTML = all_cctv.response.data.programData[11].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[12].programList){
                playmenu13[o].children[0].innerHTML = all_cctv.response.data.programData[12].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[13].programList){
                playmenu14[o].children[0].innerHTML = all_cctv.response.data.programData[13].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[14].programList){
                playmenu15[o].children[0].innerHTML = all_cctv.response.data.programData[14].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[15].programList){
                playmenu16[o].children[0].innerHTML = all_cctv.response.data.programData[15].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[16].programList){
                playmenu17[o].children[0].innerHTML = all_cctv.response.data.programData[16].programList[o].text;               
            }
            for(var o in all_cctv.response.data.programData[17].programList){
                playmenu18[o].children[0].innerHTML = all_cctv.response.data.programData[17].programList[o].text;               
            }
        }else{
        }   
    }
}



// 懒加载模块
var lazy = document.querySelectorAll(".lazy");
 
 window.addEventListener("scroll", (e) => {

    ergodic();
  });
  function ergodic() {

    for (let i of lazy) {
      //判断当前图片是否在可视区内
      if (i.offsetTop <= window.innerHeight + window.scrollY) {
          //获取自定义data-src属性的值
          let trueSrc = i.getAttribute("data-src");
          //把值赋值给图片的src属性
          i.setAttribute("src", trueSrc);
      }
    }
  }
  //没发生滚动事件时也要先执行一次
  ergodic();