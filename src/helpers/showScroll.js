const d = document,
w = window;

export default function scrollShow(element) {
    
    const animado = d.querySelector(element);

    w.addEventListener("scroll", e => {

      let scrollingTop = d.documentElement.scrollTop;

        for (let i=0; i < animado.length; i++) { 
            let alturaAnimado = animado[i].offsetTop; 
            if(alturaAnimado - 400 < scrollingTop){
                animado[i].style.opacity = 1;
                animado[i].classList.add("showElement");
            }
        }

    });
}