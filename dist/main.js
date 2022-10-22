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

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("display-product");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}