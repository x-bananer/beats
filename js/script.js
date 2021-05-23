function menuHamburger(){
    const buttonOpen = document.querySelector('.hamburger');
    const buttonClose = document.querySelector('.menu__close');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    function closeMenu (element, className){
        element.classList.remove(className)
    }
    function openMenu (element, className){
        element.classList.add(className)
    }



    buttonOpen.addEventListener('click', function(event){
        event.preventDefault();
        openMenu(menu, 'menu--opened');
        openMenu(body, 'body-blocked');
    })
    
    buttonClose.addEventListener('click', function(event){
        event.preventDefault();
        closeMenu(menu, 'menu--opened')
        closeMenu(body, 'body-blocked');
    })

    menu.addEventListener('click', function(event){
        const target = event.target;
        console.log(target);
        if(target.classList.contains('menu__link')){
            closeMenu(menu, 'menu--opened');
            closeMenu(body, 'body-blocked');
        }
    })
}

menuHamburger();