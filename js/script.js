const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
const dayNight = document.querySelector('.day-night');
const colorBtns = document.querySelectorAll('.colors span')

styleSwitcherToggle.addEventListener('click', function (e) {
    document.querySelector('.style-switcher').classList.toggle('open')
});

dayNight.addEventListener('click', function () {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark')
})
window.addEventListener('load', function () {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');

    }
})

var typed = new Typed('.typing', {
    strings: [" ", 'UI Developer', 'Front End Developer', 'Angular Developer'],
    typeSpeed: 60,
    BackSpeed: 60,
    loop: true
})



colorBtns.forEach(function (colorBtn) {
    colorBtn.addEventListener('click', function (event) {
        let btnColor = event.target.dataset.color

        document.documentElement.style.setProperty('--skin-color', btnColor)
    })
})

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length;
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const aElem = navList[i].querySelector('a');
    aElem.addEventListener('click', function (params) {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('back-section')
        }
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector('a').classList.contains('active')) {
                allSection[j].classList.add('back-section')
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn()
        }
    })
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active')
    }
    const target = element.getAttribute('href').split("#")[1];
    document.querySelector('#' + target).classList.add("active")

}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split("#")[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active')
        }
    }
}
document.querySelector('.hire-me').addEventListener('click', function (params) {
    showSection(this);
    updateNav(this);
})
const navTogglerBtn = document.querySelector('.nav-toggler'),
    aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', function (event) {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open')
    }
}