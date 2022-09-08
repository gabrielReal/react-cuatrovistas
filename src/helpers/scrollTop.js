const d = document,
w = window;

export default function scrollTopButton(btn, span) {
    const $scrollBtn = d.querySelector(btn),
    $scrollBtnSpan = d.querySelector(span);

    w.addEventListener("scroll", e => {
      let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
      if(scrollTop > 600) {
          $scrollBtn.classList.remove("hidden");
      } else {
          $scrollBtn.classList.add("hidden");
      }
  });
    w.addEventListener("click", e => {
        if(e.target.matches(span)) {
            w.scrollTo({
                behaviour: "smooth",
                top: 0
            });
        }
    });
}