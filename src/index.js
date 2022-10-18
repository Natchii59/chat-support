const button = document.getElementById('button')
const closeButton = document.getElementById('closeButton')
const menu = document.getElementById('menu')

let open = false

button.addEventListener('click', () => {
  open = !open

  if (open) {
    menu.classList.remove('opacity-0')
    menu.classList.add('opacity-100')
    menu.classList.remove('translate-x-4')
    menu.classList.remove('pointer-events-none')
  } else {
    menu.classList.add('opacity-0')
    menu.classList.remove('opacity-100')
    menu.classList.add('translate-x-4')
    menu.classList.add('pointer-events-none')
  }
})

closeButton.addEventListener('click', () => {
  open = false

  menu.classList.add('opacity-0')
  menu.classList.remove('opacity-100')
  menu.classList.add('translate-x-4')
  menu.classList.add('pointer-events-none')
})
