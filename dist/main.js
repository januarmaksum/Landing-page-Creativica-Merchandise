window.addEventListener('load', function() {
    const sidebar = document.querySelector('#sidebar')
    if (sidebar && sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden')
    }
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