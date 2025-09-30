/*document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-text");
  const extraText = document.querySelector(".extra-text");

  toggleBtn.addEventListener("click", function () {
    console.log("hejjj");
    const isVisible = extraText.style.display === "block";

    console.log("isVisible", isVisible);

    extraText.style.display = isVisible ? "none" : "block";

    console.log("display", extraText.style.display);

    toggleBtn.textContent = isVisible ? "Läs mer" : "Läs mindre";
  });
});
*/

//test

function toggleExtraText(button) {
    const extraText = button.previousElementSibling

    extraText.classList.toggle('visible')

    const isVisible = extraText.classList.contains('visible')
    extraText.style.display = !isVisible ? 'none' : 'block'
    button.textContent = isVisible ? 'Läs mindre' : 'Läs mer'
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-text')

    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            toggleExtraText(button)
        })
    })
})

//

const themeButton = document.querySelector('[data-theme-toggle]')

function getCurrentTheme({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        console.log('local theme', localStorageTheme)
        return localStorageTheme
    }
    if (systemSettingDark.matches) {
        console.log('system settings dark')
        return 'dark'
    }
    console.log('system settings light')
    return 'light'
}

themeButton.addEventListener('click', () => {
    const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark'
    document.querySelector('html').setAttribute('data-theme', newTheme)
    // update the button text
    const newCta =
        newTheme === 'dark' ? 'Change to light theme' : 'Change to dark theme'
    themeButton.innerText = newCta

    localStorage.setItem('theme', newTheme)
    currentThemeSetting = newTheme
    console.log('new theme', newTheme)
})

const localStorageTheme = localStorage.getItem('theme')
const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)')

let currentThemeSetting = getCurrentTheme({
    localStorageTheme,
    systemSettingDark
})

document.querySelector('html').setAttribute('data-theme', currentThemeSetting)

themeButton.innerText =
    currentThemeSetting === 'dark'
        ? 'Change to light theme'
        : 'Change to dark theme'

console.log('current theme setting', currentThemeSetting)
