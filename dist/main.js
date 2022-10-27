"use strict";

window.addEventListener('load', function () {
    const sidebar = document.querySelector('#sidebar')
    if (sidebar && sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden')
    }

    var observer = new IntersectionObserver(observerCallback);
    function observerCallback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInDown')
                return
            }
        });
    };

    const initElementAnimate = document.querySelectorAll('.init_animate');
    initElementAnimate && initElementAnimate.forEach((el) => observer.observe(el))

    const copyright = document.getElementById('copyright')
    const textCopyright = `Copyright &copy; ${new Date().getFullYear()} Creativica`;
    if (copyright) copyright.innerHTML = textCopyright;

    // Get the element with id="defaultOpen" and click on it
    const openDefaultProduct = document.getElementById("defaultOpen")
    openDefaultProduct?.click()

    new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        navigation: {
            nextEl: '.nav-slide-next',
            prevEl: '.nav-slide-prev'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            1536: {
                slidesPerView: 3,
                spaceBetween: 60
            }
        }
    })
})

function addEventToMenuLink() {
    const sidebar = document.getElementById("sidebar");
    sidebar && sidebar.addEventListener("click", function (event) { handleNavMenu(event) });
}

function removeEventListenerMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar && sidebar.removeEventListener("click", function (event) { handleNavMenu(event) });
}

function handleNavMenu(e) {
    if (e.target.classList.contains('link')) {
        handleMenuSidebar();
        removeEventListenerMenu();
    }
}

function handleMenuSidebar() {
    addEventToMenuLink()

    const sidebar = document.querySelector('#sidebar');
    const menu = document.querySelector('.sidebar-toggler');
    const menuTitle = document.querySelector('.menu-title');

    const handleState = function () {
        sidebar.classList.toggle('show');
        menu.classList.toggle('opened');
        menuTitle.classList.toggle('active');
    }

    if ((sidebar && sidebar.classList.contains('show')) &&
        (menu && menu.classList.contains('opened'))) {
        handleState();
        removeElementOutsideSidebar();
        return
    }

    if (sidebar && menu) {
        handleState();
        appendElementOutsideSidebar();
    }
}

function removeElementOutsideSidebar() {
    const element = document.querySelector('.outer-sidebar');
    document.body.removeChild(element);
}

function appendElementOutsideSidebar() {
    let outerSidebar = document.createElement('div');
    outerSidebar.className = 'outer-sidebar';
    outerSidebar.addEventListener('click', function () { handleMenuSidebar() });
    document.body.appendChild(outerSidebar);
}

function handleModalListCategory() {
    if (screen.width > 767) return

    const listModal = document.querySelector('.modal-lists');

    const showModal = () => {
        listModal && listModal.classList.add('open');
    }

    const closeModal = (e) => {
        if (e.target.classList.contains('modal-lists', 'open')) {
            listModal && listModal.classList.remove('open');
            window.removeEventListener('click', e => closeModal(e));
        }
    }

    showModal()
    window.addEventListener('click', e => closeModal(e));
}

function showDisplayProduct(evt, product) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("display-product");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("product-nav");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    const selectedProduct = document.querySelector(`[data-product=${product}]`);
    selectedProduct ? selectedProduct.style.display = "block" : console.error("incorrect product selector, make sure has selector name")
    evt.currentTarget.className += " active";
}