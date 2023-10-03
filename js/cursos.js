export default function cursosDropDown() {
    const accordionList = document.querySelectorAll('.cursos-accordion dt');

    if(accordionList.length) {
        accordionList[0].classList.add("activeAccordion");
        accordionList[0].nextElementSibling.classList.add("activeAccordion");

        function activeAccordion() {
            this.classList.toggle("activeAccordion");
            this.nextElementSibling.classList.toggle("activeAccordion");
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}