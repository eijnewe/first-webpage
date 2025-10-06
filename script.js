// funktion för när en knapp klickas
function toggleExtraText(button) {
    // hittar det element (extra text) som ligger före knappen i html strukturen
    const extraText = button.previousElementSibling

    extraText.classList.toggle('visible')

    const isVisible = extraText.classList.contains('visible')
    extraText.style.display = !isVisible ? 'none' : 'block'
    // om extra
    button.textContent = isVisible ? 'Läs mindre' : 'Läs mer'
}

// när all html struktur har laddats in och hittar knapparna med klassen "toggle-text"
/* document.addEventListener('DOMContentLoaded', function () {
}) */
const toggleButtons = document.querySelectorAll('.toggle-text')

toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        toggleExtraText(button)
    })
})

//

// Hämtar themebutton med attributselektor och ikonen med typselektor
const themeButton = document.querySelector('[data-theme-toggle]')
const icon = themeButton.querySelector('i')

// Använder parametrarna localStorageTheme och systemSettingDark för att ta reda på vilket tema som används
function getCurrentTheme({ localStorageTheme, systemSettingDark }) {
    // Returnerar temat som är sparat i localStorage ifall det existerar
    if (localStorageTheme !== null) {
        return localStorageTheme
    }
    // Returnerar dark ifall användaren föredrar mörkt tema
    if (systemSettingDark.matches) {
        console.log('system settings dark')
        return 'dark'
    }
    // Returnerar 'light' som standard
    return 'light'
}

// Lägger till event lyssnare på temaknappen
themeButton.addEventListener('click', () => {
    // Sätter newTheme till dark/light beroende på vad currentTheme är
    const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark'
    // Sätter data-attribut till newTheme
    document.querySelector('html').setAttribute('data-theme', newTheme)

    // Swap icon class
    // Byter ikonen på knappen från sol till måne
    const iconClass = newTheme === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'
    icon.className = `bi ${iconClass}`

    // Sparar det nya temat som variabel till key 'theme' i localStorage
    localStorage.setItem('theme', newTheme)
    // Sätter nya temat som currentThemeSetting
    currentThemeSetting = newTheme
})

// Hämtar temat som är sparat i localStorage
const localStorageTheme = localStorage.getItem('theme')
// Visar ifall användaren förinställt mörkt tema eller ej
const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)')

// Gör variabeln currentThemeSetting till det getCurrentTheme är
let currentThemeSetting = getCurrentTheme({
    localStorageTheme,
    systemSettingDark
})

// Sätter data-attribut till strängen som currentThemeSetting producerar
document.querySelector('html').setAttribute('data-theme', currentThemeSetting)

// Set initial icon
// sätter classname beroende på vilket current theme är
const initialIconClass =
    currentThemeSetting === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill'
icon.className = `bi ${initialIconClass}`
