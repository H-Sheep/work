var conts = document.querySelectorAll('.cont');
var video_nav = document.querySelector('.viedo_nav');
var flat =0;
var time
var f = 0;
for(var i = 0; i<conts.length; i++){
    video_nav.children[i].addEventListener('mouseenter',function(){
        if(flat == this.getAttribute('videoIndex')){[

        ]}else{

            // console.log(conts[flat].offsetLeft);
            // console.log(flat);
            // time = setInterval(getLeft,100);
            
            conts[flat].style.left = '-1280px';
            conts[this.getAttribute('videoIndex')].style.left = '0px';
            conts[this.getAttribute('videoIndex')].style.visibility = 'visible';


            // conts[flat].style.display = 'none';
            for(var i = 0; i<video_nav.children.length; i++){
                video_nav.children[i].className = '';
            }
            this.className = 'shadow';
            
            flat = this.getAttribute('videoIndex');
            

            // if(parseInt(conts[flat].style.left) == -1280){
            //     // console.log(1);
            //     // conts[flat].style.visibility = 'hidden';
        
            //     conts[flat].style.left = '1280px';
            // }
            
        }
    })

}
// function getLeft(){
//     conts[flat].style.left = '1230px';
//     console.log(conts[flat].offsetLeft);

//     conts[f].style.left = parseInt(conts[f].offsetLeft) - 246+'px';
//     conts[flat].style.left = parseInt(conts[flat].offsetLeft) - 246+'px';

//     if(conts[f].offsetLeft <= -1230){
//         clearInterval(time);
//         conts[f].style.display = 'none';     
//         conts[f].style.left = '1230px';
        
//     }    
//     if(conts[flat].offsetLeft == 0){
//         clearInterval(time);
//         return
//     }    
// }
