var tv_left_btn = document.querySelector('.tv_left_btn');
var tv_right_btn = document.querySelector('.tv_right_btn');
var tv_slider = document.querySelector('.tv_slider');
var b = document.querySelector('b');
var f5 = document.querySelector('#f5');
var flat = 0;

b.addEventListener('click',function(){

    f5.style.transform = 'rotate(360deg)';
})




tv_left_btn.addEventListener('click',function(){
    if(flat > 0){
        tv_slider.style.marginLeft =  parseInt(tv_slider.style.marginLeft) + 1145 + 'px';
        flat--;
    }
    if(flat == 0){
        tv_left_btn.children[0].style.background = '#e5e5e5 url(./images/直播导视左箭头白.png) no-repeat center center' 
    }
})

tv_right_btn.addEventListener('click',function(){
    if(flat < 3){
        flat++;
        tv_slider.style.marginLeft =  parseInt(tv_slider.style.marginLeft) - 1145 + 'px';      
    }
    if(flat == 3){
        tv_right_btn.children[0].style.background = '#e5e5e5 url(./images/直播导视右箭头白.png) no-repeat center center' 
        
    }
})

tv_left_btn.addEventListener('mouseenter',function(){
    if(flat == 0){
        tv_left_btn.children[0].style.background = '#e5e5e5 url(./images/直播导视左箭头白.png) no-repeat center center' 
    }else{
        tv_left_btn.children[0].style.background = '#0084FF url(./images/直播导视左箭头白.png) no-repeat center center' 
    }
})

tv_left_btn.addEventListener('mouseleave',function(){
    tv_left_btn.children[0].style.background = '#FFFFFF url(./images/直播导视左箭头.png) no-repeat center center'
})

tv_right_btn.addEventListener('mouseenter',function(){
    if(flat == 3){
        tv_right_btn.children[0].style.background = '#e5e5e5 url(./images/直播导视右箭头白.png) no-repeat center center' 
        
    }else{
        tv_right_btn.children[0].style.background = '#0084FF url(./images/直播导视右箭头白.png) no-repeat center center' 
    }
    
})
tv_right_btn.addEventListener('mouseleave',function(){
    tv_right_btn.children[0].style.background = '#FFFFFF url(./images/直播导视右箭头.png) no-repeat center center'
})