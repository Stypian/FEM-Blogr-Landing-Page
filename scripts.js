const test = document.querySelector('.blogLan__h1');

function showDropMenu() {
    const link = document.querySelectorAll(".blogLan__drop-link");
    const menu = document.querySelectorAll(".blogLan__drop-menu");
    const arrow = document.querySelectorAll(".blogLan__arrow");

        link.forEach((l, i) => {
            l.addEventListener('mouseover', function() {
                arrow[i].src = 'images/icon-arrow-dark.svg';
            })

            l.addEventListener('mouseout', function() {
                if (!arrow[i].classList.contains('blogLan__arrow-up')) {
                    arrow[i].src = 'images/icon-arrow-light.svg';
                };
            });
        });
        
       document.addEventListener('click', function(event) {
            link.forEach((e, i) => {
                if (e.contains(event.target) || menu[i].contains(event.target)) {
                    menu[i].classList.toggle('blogLan__show-menu');
                    arrow[i].classList.toggle('blogLan__arrow-up');
                    link[i].classList.toggle('blogLan__drop-link-clicked');
                    arrow[i].src = 'images/icon-arrow-dark.svg';
                } else {
                    menu[i].classList.remove('blogLan__show-menu');
                    arrow[i].classList.remove('blogLan__arrow-up');
                    link[i].classList.remove('blogLan__drop-link-clicked');
                    arrow[i].src = 'images/icon-arrow-light.svg';
                }

                if (link[i].classList.contains('blogLan__drop-link-clicked')) {
                    link[i].setAttribute('aria-expanded', 'true');
                } else {
                    link[i].setAttribute('aria-expanded', 'false');
                }
            })
        })
     
}
showDropMenu();

function showMobileMenu() {
    const openNav = document.querySelector(".blogLan__menu-icon");
    const mobNav = document.querySelector(".blogLan__mobile-nav");

    document.addEventListener('click', function(e) {
        if (openNav.contains(e.target)) {
            mobNav.classList.toggle('blogLan__show-mob');
        }  else if (!mobNav.contains(e.target)) {
            mobNav.classList.remove('blogLan__show-mob');
        }

        mobNav.classList.contains('blogLan__show-mob') ? openNav.src = 'images/icon-close.svg' : openNav.src = 'images/icon-hamburger.svg';
    })
}
showMobileMenu();

function showMobileDropMenu() {
    const links = document.querySelectorAll(".blogLan__mobile-drop-link");
    const drops = document.querySelectorAll(".blogLan__mobile-drop");
    const navList = document.querySelector(".blogLan__mobile-nav-ul");
    const arrow = document.querySelectorAll(".blogLan__mobile-arrow");

    navList.addEventListener('click', function(e) {
        links.forEach((l, i) => {
            if (l.contains(e.target)) {
                drops[i].classList.toggle('blogLan__show-mob-drop');
                arrow[i].classList.toggle('blogLan__arrow-up');
            } else {
                drops[i].classList.remove('blogLan__show-mob-drop');
                arrow[i].classList.remove('blogLan__arrow-up');
            }

            if (drops[i].classList.contains('blogLan__show-mob-drop')) {
                links[i].setAttribute('aria-expanded', 'true');
            } else {
                links[i].setAttribute('aria-expanded', 'false');
            }
        });
    });
}
showMobileDropMenu();

function addAnimationClasses() {
    const text = document.querySelectorAll(".blogLan__ani-bot");
    const imgs = document.querySelectorAll(".blogLan__ani-op");
    
    text.forEach(e => e.classList.add('blogLan__ani-text'));
    imgs.forEach(e => e.classList.add('blogLan__ani-img'));
}   
addAnimationClasses();

function addAnimationsOnScroll(a, b) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.intersectionRatio >= 0.5) {
                e.target.classList.add(b);
            }
        })
    }, {threshold: 0.5});

    document.querySelectorAll(a).forEach(e => {
        observer.observe(e);
    });
};
addAnimationsOnScroll('.blogLan__ani-text', 'blogLan__text-ani');
addAnimationsOnScroll('.blogLan__ani-img', 'blogLan__img-ani');


