navButtonsMoblie.addEventListener('click', ()=>{
  dropdownInteraction()
})
dropdown.addEventListener('click', ()=>{
  dropdownInteraction()
})

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