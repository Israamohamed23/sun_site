let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let sun = document.getElementById('mountain3');
window.onscroll = function(){
    let value = scrollY;
    stars.style.top = value + 'px';
    moon.style.bottom= value * 3 + 'px';
    sun.style.top = value * 2 + 'px';
    moonpie.style.fontsize = value + 'px';
if(scrollY >= 70){
    moonpie.style.fontsize = 70 + 'px';
    moonpie.style.position = 'fixed';
    if(scrollY >= 478){
        moonpie.style.display = 'none';
    }else{
        moonpie.style.display = 'block';
    }
    if(scrollY >= 127){
        document.querySelector('.main').style.background ='linear-gradient(#376281,#10001f);'
    }else{
        document.querySelector('.main').style.background ='linear-gradient(#460356,#1f0542);'
    }
}

}