const navButtonsDesktop = document.querySelector('.nav_buttons-desktop')
const navButtonsMoblie = document.querySelector('.nav_buttons-mobile')
const dropdown = document.querySelector('.dropdown')
let width = window.innerWidth

if (width <= 800){
  navButtonsDesktop.style.display = "none"
  navButtonsMoblie.style.display = "block"
}

function dropdownInteraction(){
  if(dropdown.style.display === "none"){
    dropdown.style.display = "flex"
  } else dropdown.style.display = "none"
}

function hideDropdown(){
  dropdown.style.display = "none"
}

