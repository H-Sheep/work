var rank_serch = document.querySelector('.rank_serch');
var list = document.querySelector('.list');
rank_serch.addEventListener('focus',function(){
    list.style.display = 'block';
})

rank_serch.addEventListener('blur',function(){
    list.style.display = 'none';
})


// 滑块部分
var btnLeft = document.querySelector('.btnLeft');
var btnRight = document.querySelector('.btnRight');
var slider = document.querySelector('#slider');
var flat = 0;
// console.log(slider.style.marginLeft);
btnRight.addEventListener('click', function(){
    if(flat <2 ){
        flat++;
        slider.style.marginLeft = parseInt(slider.style.marginLeft) - 808 + 'px';
    }
    if(flat != 2){
        this.style.display = 'block';    
    }else{
        this.style.display = 'none';
    }
    if(flat != 0){
        btnLeft.style.display = 'block';
    }else{
        btnLeft.style.display = 'none';
    }
})
btnLeft.addEventListener('click', function(){
    if(flat > 0){
        
        flat--;
        slider.style.marginLeft = parseInt(slider.style.marginLeft) + 808 + 'px';
    }
    if(flat != 0){
        this.style.display = 'block';
    }else{
        this.style.display = 'none';
    }
    if(flat != 2){
        btnRight.style.display = 'block';    
    }else{
        btnRight.style.display = 'none';
    }
})

// 轮播图控制部分
var onlive = document.querySelector('.onlive');
var niceTJ = document.querySelector('.niceTJ');
var bullets = document.querySelectorAll('.bullet');
var menus = document.querySelectorAll('.menu');
var banner_bodys = document.querySelectorAll('.banner_body');
var swiper_contain = document.querySelector('.swiper_contain');
var f = 0;
for(var i =0 ; i<menus.length; i++){
    menus[i].onmouseover = function(){

        for(var i =0 ; i<banner_bodys.length; i++){
            banner_bodys[i].style.display = 'none';
        }

        for(var i =1 ; i<banner_bodys.length; i++){
            menus[i].children[0].className = 'bullet';
        }

        if(this.getAttribute('index') == 0){
            swiper_contain.style.display = 'none';
            this.className = 'onlive menu bluecolor';  
            niceTJ.className = 'niceTJ';
            
            niceTJ.style.background = 'url(./images/白奖牌.png)no-repeat left center';
            onlive.style.background = 'url(./images/蓝火箭.png)no-repeat left center';
        }else{
            niceTJ.className = 'niceTJ bluecolor';
            swiper_contain.style.display = 'block';
            menus[0].className = 'onlive menu';
            this.children[0].className = 'bullet bluecolor';
            onlive.style.background = 'url(./images/白火箭.png)no-repeat left center';
            niceTJ.style.background = 'url(./images/蓝奖牌.png)no-repeat left center';
        }

        banner_bodys[this.getAttribute('index')].style.display = 'block';
        f = this.getAttribute('index'); 
    }
    menus[i].onmouseout = function(){
        time = setInterval(autobanner,4000);           
    }
    menus[i].addEventListener('mousemove',function(){
        clearInterval(time);
    })
    banner_bodys[i].onmouseout = function(){
        time = setInterval(autobanner,4000);           
    }
    banner_bodys[i].addEventListener('mousemove',function(){
        clearInterval(time);
    })
}
function autobanner(){
    f++;
    if(f>6){
        f=0;
    }
    menus[f].onmouseover();
}
var time = setInterval(autobanner,4000);

// 手机看模块

var phone = document.querySelector('.phone');
var erweima = document.querySelector('.erweima');

phone.addEventListener('mouseenter',function(){
    this.style.display = 'none';
    erweima.style.display = 'block';
})

erweima.addEventListener('mouseleave',function(){
    this.style.display = 'none';
    phone.style.display = 'block';
})