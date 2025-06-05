const collapse_button = document.getElementById('Collapse-Button')
const sidebar = document.getElementById('Sidebar')




const toggle_sidebar = () => {
  Array.from(sidebar.getElementsByClassName('Show')).forEach(ul => {
    ul.classList.remove('Show')
    ul.previousElementSibling.classList.remove('Rotate')
  })

  sidebar.classList.toggle('Close')
  collapse_button.classList.toggle('Rotate')
}

const toggle_sub_menu = (button) => {
  if (sidebar.classList.contains('Close')) toggle_sidebar()

  button.nextElementSibling.classList.toggle('Show')
  button.classList.toggle('Rotate')
}