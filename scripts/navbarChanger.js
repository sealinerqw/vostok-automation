const body = document.querySelector('.body')
const navButtonsDesktop = document.querySelector('.nav_buttons-desktop')
const navButtonsMoblie = document.querySelector('.nav_buttons-mobile')

const widthObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.contentRect.width <= 950) {
      navButtonsDesktop.style.display = "none";
      navButtonsMoblie.style.display = "block";
    } else {
      navButtonsDesktop.style.display = "inherit";
      navButtonsMoblie.style.display = "none";
    }
  })
})

widthObserver.observe(body)