const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeChageBtn = document.querySelector('.js-switch-input');
const bodyRef = document.querySelector('#body');
const applayedTheme = localStorage.getItem('theme');
console.log(themeChageBtn);
if (applayedTheme === Theme.DARK) {
  bodyRef.classList.add(applayedTheme);
  themeChageBtn.setAttribute('checked', true);
} else {
  bodyRef.classList.add(Theme.LIGHT);
}
console.log(themeChageBtn);
themeChageBtn.addEventListener('change', changeTheme);

function changeTheme(event) {
  const isChecked = event.target.checked;
  if (isChecked) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
    return;
  }
  bodyRef.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
  bodyRef.classList.remove(Theme.DARK);
}
