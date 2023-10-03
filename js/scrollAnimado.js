export default function scrollAnimado() {
    const sections = document.querySelectorAll(".js-scroll");

    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        const animaScroll = () => {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = sectionTop - windowMetade < 0;
                if (isSectionVisible) section.classList.add("animarEntrada");
                else section.classList.remove("animarEntrada");
            });
        };
        animaScroll();
        window.addEventListener("scroll", animaScroll);
    }
}