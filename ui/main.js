console.log('Loaded!');

/*  // to change html main text
var elemnt = document.getElementById('main-txt');
elemnt.innerHTML = 'abcd';
*/

var img = document.getElementById('madi');
var marginLeft=0;

function moveRight(){
    marginLeft += 5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,50);
}
/*
var counter=0;

var btn = document.getElementById('btn');

btn.onclick = function(){
    counter+=1;
    var val = document.getElementById('count');
    val.innerHTML=counter.toString();
}*/

var btn = document.getElementById('btn');

btn.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLRequestReady.DONE){
            if(request.status==200){
                var counter = responceText;
                 var val = document.getElementById('count');
                 val.innerHTML=counter.toString();
            }
        }
    };
};