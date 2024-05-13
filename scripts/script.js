const width = window.innerWidth
const navButtonsDesktop = document.querySelector('.nav_buttons-desktop')
const navButtonsMoblie = document.querySelector('.nav_buttons-mobile')
const dropdown = document.querySelector('.dropdown')
const map = document.querySelector('.contacts_map')
const overlay = document.querySelector('.overlay')
const sleep = ms => new Promise(r => setTimeout(r, ms));
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
if (width <= 800){
  navButtonsDesktop.style.display = "none"
  navButtonsMoblie.style.display = "block"
}

//замена вставки карты в контактах при загрузке сайта на
//устройствах с шириной экрана <= 360 пикселей
if(width <= 360){
  // map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac9d40a48c2fa8d3795fa9fe89a5816c4501d1040980a0799c15b64336bd9a8b7&amp;source=constructor" width="320" height="350" frameborder="0"></iframe>'
  map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac9d40a48c2fa8d3795fa9fe89a5816c4501d1040980a0799c15b64336bd9a8b7&amp;source=constructor" width="288" height="282" frameborder="0"></iframe>'
}

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