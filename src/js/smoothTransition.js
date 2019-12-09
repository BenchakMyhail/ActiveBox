// ---------Smooth transition after click button----------
export const smoothTransition = () => {
  const linkNav = document.querySelectorAll('[href^="#"]'), //add all anchor
    V = 0.5;  //Speed    
  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
      e.preventDefault();
      const w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1'),
      t = document.querySelector(hash).getBoundingClientRect().top;
       let start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
          r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    }, false);
  }
};
