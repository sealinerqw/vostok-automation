const width = window.innerWidth
const navButtonsDesktop = document.querySelector('.nav_buttons-desktop')
const navButtonsMoblie = document.querySelector('.nav_buttons-mobile')
const dropdown = document.querySelector('.dropdown')
const map = document.querySelector('.contacts_map')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('.body')
const sleep = ms => new Promise(r => setTimeout(r, ms))
const hiddenElements = document.querySelectorAll('.hidden')

//если div попадает в видимость на экране добавить css-класс show
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    }
  })
})

//смена nav-бара при загрузке с мобильного устройства
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

//взаимодействие с кнопкой и элементами мобильного nav-сегмента
navButtonsMoblie.addEventListener('click', ()=>{
  dropdownInteraction()
})
dropdown.addEventListener('click', ()=>{
  dropdownInteraction()
})

//действия при взаимодействии с дропдауном мобильного nav-сегмента
async function dropdownInteraction(){
  if(dropdown.style.display === "none"){
    dropdown.style.animation = "growDown 0.3s ease-in-out forwards"
    dropdown.style.display = "flex"
  } else {
    dropdown.style.animation = "shrinkUp 0.3s ease-in-out backwards"
    await sleep(300)
    dropdown.style.display = "none"
  }
}

hiddenElements.forEach((element) => observer.observe(element))
widthObserver.observe(body)