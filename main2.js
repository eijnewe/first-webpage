/* searchable data created here */
/* make the value of each select option match the key of the object - e.g. low, medium, high, veryHigh */
const staticData = {
    low: {
        categoryName: 'Låga moln',
        types: [
            { name: 'Valkmoln', latinName: 'Stratocumulus' },
            { name: 'Dimmoln', latinName: 'Stratus' }
        ]
    },
    medium: {
        categoryName: 'Medelhöga moln',
        types: [
            { name: 'Böljemoln', latinName: 'Altocumulus' },
            { name: 'Skiktmoln', latinName: 'Altostratus' }
        ]
    },
    high: {
        categoryName: 'Höga moln',
        types: [
            { name: 'Fjädermoln', latinName: 'Cirrus' },
            { name: 'Slöjmoln', latinName: 'Cirrostratus' },
            { name: 'Makrillmoln', latinName: 'Cirrocumulus' }
        ]
    },
    veryHigh: {
        categoryName: 'Moln med stor vertikal utsträckning',
        types: [
            { name: 'Regn- eller snömoln', latinName: 'Nimbostratus' },
            { name: 'Stackmoln', latinName: 'Cumulus' },
            { name: 'Åsk- eller bymoln', latinName: 'Cumulonimbus' }
        ]
    }
}

/* searchable data created here */
/* make the value of each select option match the key of the object - e.g. low, medium, high, veryHigh */
const staticData2 = {
    europe: {
        categoryName: 'Europa',
        types: [
            { name: 'Sweden', sweName: 'Sverige' },
            { name: 'Spain', sweName: 'Spanien' },
            { name: 'France', sweName: 'Frankrike' },
            { name: 'Greece', sweName: 'Grekland' },
            { name: 'Germany', sweName: 'Tyskland' },
            { name: 'England', sweName: 'England' },
            { name: 'Poland', sweName: 'Polen' },
            { name: 'Ukraine', sweName: 'Ukraina' }
        ]
    },
    southAmerica: {
        categoryName: 'Sydamerika',
        types: [
            { name: 'Argentina', sweName: 'Argentina' },
            { name: 'Brazil', sweName: 'Brasilien' },
            { name: 'Peru', sweName: 'Peru' },
            { name: 'Colombia', sweName: 'Colomnia' }

        ]
    },
    asia: {
        categoryName: 'Asien',
        types: [
            { name: 'China', sweName: 'Kina' },
            { name: 'South Korea', sweName: 'Sydkorea' },
            { name: 'Mongolia', sweName: 'Mongoliet' },
            { name: 'Russia', sweName: 'Ryssland' },
            { name: 'North Korea', sweName: 'Nordkorea' }
        ]
    },
    africa: {
        categoryName: 'Afrika',
        types: [
            { name: 'Egypt', sweName: 'Egypten' },
            { name: 'Morocco', sweName: 'Marocko' },
            { name: 'Tunisia', sweName: 'Tunisien' }
        ]
    }
}
/* ------------------------------------------------------------ */

const searchInput2 = document.getElementById('selectInput2')
const resultsList2 = document.getElementById('searchResults2')

function renderResults2(results) {
    while (resultsList2.firstChild) {
        resultsList2.removeChild(resultsList2.firstChild)
    }
    if (results.length === 0) {
        const li = document.createElement('li')
        li.textContent = 'Inga resultat'
        resultsList2.appendChild(li)
        return
    }
    results.forEach((cloud) => {
        const li = document.createElement('li')

        /* list item in search result is created here */
        /* ------------------------------------------------------------ */
        li.innerHTML = `<strong>${cloud.name}</strong> (${cloud.sweName})`
        /* ------------------------------------------------------------ */

        resultsList2.appendChild(li)
    })
}

searchInput2.addEventListener('change', () => {
    const selectedCategory = searchInput2.value

    if (!selectedCategory) {
        renderResults2([])
        return
    }

    const selectedClouds = staticData2[selectedCategory]
    if (selectedClouds) {
        const cloudTypesWithCategory = selectedClouds.types.map((type) => ({
            ...type,
            category: selectedClouds.categoryName
        }))

        renderResults2(cloudTypesWithCategory)
    } else {
        renderResults2([])
    }
})



const searchInput = document.getElementById('selectInput')
const resultsList = document.getElementById('searchResults')

function renderResults(results) {
    while (resultsList.firstChild) {
        resultsList.removeChild(resultsList.firstChild)
    }
    if (results.length === 0) {
        const li = document.createElement('li')
        li.textContent = 'Inga resultat'
        resultsList.appendChild(li)
        return
    }
    results.forEach((cloud) => {
        const li = document.createElement('li')

        /* list item in search result is created here */
        /* ------------------------------------------------------------ */
        li.innerHTML = `<strong>${cloud.name}</strong> (${cloud.latinName})`
        /* ------------------------------------------------------------ */

        resultsList.appendChild(li)
    })
}

searchInput.addEventListener('change', () => {
    const selectedCategory = searchInput.value

    if (!selectedCategory) {
        renderResults([])
        return
    }

    const selectedClouds = staticData[selectedCategory]
    if (selectedClouds) {
        const cloudTypesWithCategory = selectedClouds.types.map((type) => ({
            ...type,
            category: selectedClouds.categoryName
        }))

        renderResults(cloudTypesWithCategory)
    } else {
        renderResults([])
    }
})
