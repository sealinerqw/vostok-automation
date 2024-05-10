const navButtonsDesktop = document.querySelector('.nav_buttons-desktop')
const navButtonsMoblie = document.querySelector('.nav_buttons-mobile')
const dropdown = document.querySelector('.dropdown')
const map = document.querySelector('.contacts_map')
let width = window.innerWidth

if (width <= 800){
  navButtonsDesktop.style.display = "none"
  navButtonsMoblie.style.display = "block"
}
if(width <= 360){
  // map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac9d40a48c2fa8d3795fa9fe89a5816c4501d1040980a0799c15b64336bd9a8b7&amp;source=constructor" width="320" height="350" frameborder="0"></iframe>'
  map.innerHTML = '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac9d40a48c2fa8d3795fa9fe89a5816c4501d1040980a0799c15b64336bd9a8b7&amp;source=constructor" width="288" height="282" frameborder="0"></iframe>'
}
function dropdownInteraction(){
  if(dropdown.style.display === "none"){
    dropdown.style.display = "flex"
  } else dropdown.style.display = "none"
}

function hideDropdown(){
  dropdown.style.display = "none"
}

