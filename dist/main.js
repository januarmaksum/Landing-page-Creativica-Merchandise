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
    initElementAnimate.forEach((el) => observer.observe(el))

    const copyright = document.getElementById('copyright')
    const textCopyright = `Copyright &copy; ${new Date().getFullYear()} Creativica`;
    if (copyright) copyright.innerHTML = textCopyright;
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