const toggleButton = document.getElementById('theme-toggle')
const lightButton = document.getElementById('theme-toggle-light-icon')
const darkButton = document.getElementById('theme-toggle-dark-icon')

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkButton.classList.remove('hidden')
} else {
  lightButton.classList.remove('hidden')
}

toggleButton.addEventListener('click', toggleTheme);

function toggleTheme(){
  lightButton.classList.toggle('hidden');
  darkButton.classList.toggle('hidden');

  if(localStorage.getItem('color-theme')){
    if(localStorage.getItem('color-theme') === 'dark'){
      localStorage.setItem('color-theme', 'light')
      document.documentElement.classList.remove('dark')
    }else{
      localStorage.setItem('color-theme', 'dark')
      document.documentElement.classList.add('dark')
    }
  }else{
    // If not in localstorage
    if(document.documentElement.classList.contains('dark')){
      localStorage.setItem('color-theme', 'light')
      document.documentElement.classList.remove('dark')
    }else{
      localStorage.setItem('color-theme', 'dark')
      document.documentElement.classList.add('dark')
    }
  }
}