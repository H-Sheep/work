var shizhen = document.querySelector('#shizhen');
var CCTV = document.querySelector('#CCTV');
var language = document.querySelector('#language');
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var secnav = document.querySelector('.secnav');


// 搜索跳转部分
var ser_btn = document.querySelector('.ser_btn');
ser_btn.addEventListener('click',function(){
    location.assign('https://www.baidu.com');

})
document.addEventListener('keydown',function(e){
    if(e.keyCode ==13){
        location.assign('https://www.baidu.com');
    
    }

})



// 二层导航栏部分
img1.addEventListener('mouseover',function(){
    this.style.display = 'none';
    img2.style.display = 'block';
    
})
img2.addEventListener('mouseout',function(){
    this.style.display = 'none';
    img1.style.display = 'block';
})

shizhen.addEventListener('mouseover',function(){
    for(var i = 0; i<secnav.children[0].children.length ;i++){
        secnav.children[0].children[i].className = 'none';
    }
    secnav.children[0].children[1].className = 'block';

})

CCTV.addEventListener('mouseover',function(){
    for(var i = 0; i<secnav.children[0].children.length ;i++){
        secnav.children[0].children[i].className = 'none';
    }
    secnav.children[0].children[2].className = 'block';

})

language.addEventListener('mouseover',function(){
    for(var i = 0; i<secnav.children[0].children.length ;i++){
        secnav.children[0].children[i].className = 'none';
    }
    secnav.children[0].children[3].className = 'block';

})


secnav.addEventListener('mouseleave', function(e){
    e.stopPropagation();

    for(var i = 0; i<secnav.children[0].children.length ;i++){
        secnav.children[0].children[i].className = 'none';
    }
    secnav.children[0].children[0].className = 'block';
})

document.body.addEventListener('mouseleave', function(){
    for(var i = 0; i<secnav.children[0].children.length ;i++){
        secnav.children[0].children[i].className = 'none';
    }
    secnav.children[0].children[0].className = 'block';
})



// 搜索部分显示隐藏
var serch_out = document.querySelector('.serch_out');
var max_serch = document.querySelector('.max_serch');

max_serch.addEventListener('click',function(){
    serch_out.style.width = '440px'; 
})

document.addEventListener('mousedown', (e) => {
    if (!e.path.includes(serch_out)) {
        serch_out.style.width = '0px'; 
	}
})


// 搜索部分显示隐藏
var rn = document.querySelector('.rn');
var sign = document.querySelector('.sign');

rn.addEventListener('click',function(){
    sign.style.height = '280px';
})

document.addEventListener('mousedown', (e) => {
    if (!e.path.includes(sign)) {
        sign.style.height = '0px'; 
	}
})


// 侧边栏
// 回到顶部
var TOPBTN = document.querySelector('.fnav7');
// console.log(TOPBTN);
var time = null;
TOPBTN.onclick = function(){
    cancelAnimationFrame(time);
    time = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
            document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
            time = requestAnimationFrame(fn);
        }else{
            cancelAnimationFrame(time);
        } 
    });
}

// 点击跳转

var thefirst = document.querySelector('.fnav0'); 
thefirst.onclick = function(){
    scrollToCmtList();  
}
function scrollToCmtList(){
    const now = window.scrollY
    dist = document.querySelector('.today_hot').getBoundingClientRect().top+500 ;
    const step = (dist - now) / 10;
    setTimeout(() => {
        if (Math.abs(step) <= 1) {
        return window.scrollTo(0, dist)
        }
        window.scrollTo(0, now + step)
        this.scrollToCmtList()
    }, 10)
}

var thesec = document.querySelector('.fnav1'); 
thesec.onclick = function(){
    scrollToCmtList1();  
}
function scrollToCmtList1(){
    const now = window.scrollY
    dist = document.querySelector('.tvCCTV').getBoundingClientRect().top+800;
    const step = (dist - now) / 10;
    setTimeout(() => {
        if (Math.abs(step) <= 1) {
        return window.scrollTo(0, dist)
        }
        window.scrollTo(0, now + step)
        this.scrollToCmtList1()
    }, 10)
}

var thethird = document.querySelector('.fnav2'); 
thethird.onclick = function(){
    scrollToCmtList2();  
}
function scrollToCmtList2(){
    const now = window.scrollY
    dist = document.querySelector('.fine').getBoundingClientRect().top+1500;
    const step = (dist - now) / 10;
    setTimeout(() => {
        if (Math.abs(step) <= 1) {
        return window.scrollTo(0, dist)
        }
        window.scrollTo(0, now + step)
        this.scrollToCmtList2()
    }, 10)
}

var thefouth = document.querySelector('.fnav3'); 
thefouth.onclick = function(){
    scrollToCmtList3();  
}
function scrollToCmtList3(){
    const now = window.scrollY
    dist = document.querySelector('.all_video').getBoundingClientRect().top+2000;
    const step = (dist - now) / 10;
    setTimeout(() => {
        if (Math.abs(step) <= 1) {
        return window.scrollTo(0, dist)
        }
        window.scrollTo(0, now + step)
        this.scrollToCmtList3()
    }, 10)
}

var thefi = document.querySelector('.fnav4'); 
thefi.onclick = function(){
    scrollToCmtList4();  
}
function scrollToCmtList4(){
    const now = window.scrollY
    dist = document.querySelector('.view').getBoundingClientRect().top+2400;
    const step = (dist - now) / 10;
    setTimeout(() => {
        if (Math.abs(step) <= 1) {
        return window.scrollTo(0, dist)
        }
        window.scrollTo(0, now + step)
        this.scrollToCmtList4()
    }, 10)
}

var thesix = document.querySelector('.fnav5'); 
thesix.onclick = function(){
    scrollToCmtList5();  
}
function scrollToCmtList5(){
    const now = window.scrollY
    dist = document.querySelector('.all_cctv').getBoundingClientRect().top+4700;
    const step = (dist - now) / 10;
    setTimeout(() => {
        if (Math.abs(step) <= 1) {
        return window.scrollTo(0, dist)
        }
        window.scrollTo(0, now + step)
        this.scrollToCmtList5()
    }, 10)
}

var floatNav = document.querySelector('.floatNav');
var header_nav = document.querySelector('.header_nav');

 window.onscroll = function () {
    let scrollPos = getScrollTop();
    // console.log("scrollPos",scrollPos);
    if (scrollPos >= 500) {
        floatNav.style.display = 'block';
        header_nav.style.display = 'block';
    }
    else{
        floatNav.style.display = 'none';
        header_nav.style.display = 'none';

    }
    if (scrollPos >= 500 && scrollPos <= 950){
        thefirst.style.color = '#0084ff';
        thefirst.style.backgroundImage = 'url(./images/fnav_1_h.png)';
    }else{
        thefirst.style.color = '#5a5e62';
        thefirst.style.backgroundImage = 'url(./images/fnav_1.png)';
    }
    if (scrollPos > 950 && scrollPos <= 1500){
        thesec.style.color = '#0084ff';
        thesec.style.backgroundImage = 'url(./images/fnav_2_h.png)';
    }else{
        thesec.style.color = '#5a5e62';
        thesec.style.backgroundImage = 'url(./images/fnav_2.png)';
    }
    if (scrollPos > 1500 && scrollPos <= 2000){
        thethird.style.color = '#0084ff';
        thethird.style.backgroundImage = 'url(./images/fnav_3_h.png)'; 
    }else{
        thethird.style.color = '#5a5e62';
        thethird.style.backgroundImage = 'url(./images/fnav_3.png)'; 
    }
    if (scrollPos > 2000 && scrollPos <= 2500){
        thefouth.style.color = '#0084ff';
        thefouth.style.backgroundImage = 'url(./images/fnav_4_h.png)';
    }else{
        thefouth.style.color = '#5a5e62';
        thefouth.style.backgroundImage = 'url(./images/fnav_4.png)';
    }
    if (scrollPos > 2500 && scrollPos <= 5000){
        thefi.style.color = '#0084ff';
        thefi.style.backgroundImage = 'url(./images/fnav_5_h.png)';
    }else{
        thefi.style.color = '#5a5e62';
        thefi.style.backgroundImage = 'url(./images/fnav_5.png)';
    }
    if (scrollPos > 5000){
        thesix.style.color = '#0084ff';
        thesix.style.backgroundImage = 'url(./images/fnav_6_h.png)';
    }else{
        thesix.style.color = '#5a5e62';
        thesix.style.backgroundImage = 'url(./images/fnav_6.png)';
    }
}
function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset)
    {
        scrollPos = window.pageYOffset;
    }
    else if (document.compatMode && document.compatMode != 'BackCompat')
    {
        scrollPos = document.documentElement.scrollTop;
    }
    else if (document.body)
    {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
 }