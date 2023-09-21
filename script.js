//Header Toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['Student!','Programmer!','Future Web Developer!','Future Software Engineer!','Dean Lister'],
    typespeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
})