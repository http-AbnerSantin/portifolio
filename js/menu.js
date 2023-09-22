
export default function menuMobile() {
    const btnMobile = document.querySelector(".menu-hamburguer");

    function toggleMenu(e) {
        if(e.type === 'touchstart') e.preventDefault();
      const nav = document.querySelector("nav");
      
      
      nav.classList.toggle("ativo");
      const active = nav.classList.contains('active');
      e.currentTarget.setAttribute('aria-expanded', active)
      if(active) {
            e.currentTarget.setAttribute('aria-label', 'Fechar Menu');  
        } else {
            e.currentTarget.setAttribute("aria-label", "Abrir menu");  
            
        }

        const menuItems = document.querySelectorAll(
          '.menu-list li a[href^="#"]'
        );
        menuItems.forEach((item) => {
          item.addEventListener("click", (event) => {
            event.preventDefault();
            const to = getScrollTopByHref(event.target) - 30;
            nav.classList.remove('ativo')

            scrollToPosition(to);
          });
        });

        function scrollToPosition(to) {
          window.scroll({
            top: to,
            behavior: "smooth",
          });
        }

        function getScrollTopByHref(element) {
          const id = element.getAttribute("href");
          return document.querySelector(id).offsetTop;
        }
    }

    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu)
}
