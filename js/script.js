const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click',function(e){
    document.querySelector('.style-switcher').classList.toggle('open')
});

const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click',function(){
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark')
})
window.addEventListener('load',function(){
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
        
    }    
})

var typed = new Typed('.typing',{
    strings:[" ",'UI Developer','Front End Developer','Angular Developer'],
    typeSpeed:60,
    BackSpeed:60,
    loop:true
})