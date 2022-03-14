//control menu javascript
window.onload = () => {
    const menuIcon = document.getElementsByClassName('menu-icon')[0];
    const leftMenu = document.getElementsByClassName('left-menu')[0];

    //click menuIcon open or close menu
    menuIcon.onclick = () => {
        if (menuIcon.classList.contains('active')) {
            menuIcon.classList.remove('active');
            leftMenu.classList.remove('active');
        } else {
            menuIcon.classList.add('active');
            leftMenu.classList.add('active');
        }
    };

    //click a tags to close menu
    const aTags = document.getElementsByTagName('a');
    for (var i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function () {
            menuIcon.classList.remove('active');
            leftMenu.classList.remove('active');
        }
    }

    //listening click
    document.addEventListener('click', function (e) {
        //when menu opened
        if (menuIcon.classList.contains('active')) {
            //click outside the menu,close menu
            if (!leftMenu.contains(e.target)) {
                menuIcon.classList.remove('active');
                leftMenu.classList.remove('active');
            }
        }
    });
};
