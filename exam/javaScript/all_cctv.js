var channels = document.querySelectorAll('#channel');
var list_box = document.querySelectorAll('.list_box');
for(var i = 0 ;i <channels.length;i++){
    channels[i].addEventListener('click',function(){
        for(var i =0 ;i<channels.length;i++){
            channels[i].children[0].style.color = '#535353';
            channels[i].children[1].style.display = 'none';
            list_box[i].style.display = "none";
        }
        this.children[0].style.color = '#bf0614';
        this.children[1].style.display = 'block';
        list_box[this.getAttribute('index')].style.display = "block";

    })
}