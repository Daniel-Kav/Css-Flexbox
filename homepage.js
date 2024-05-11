const menu = document.getElementById('hamburger');
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');

    openMenu.addEventListener('click', () => {
      menu.style.transform = "translateX(0)";
      menu.style.display = "block";

    })

    closeMenu.addEventListener('click', () => {
      menu.style.transform = "translateX(400px)";
      menu.style.display = "none";
    })