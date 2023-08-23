//Nacitanie dat z localStorage do premenne names
//Ked je localStorage prazdny, tak do names sa ulozi prazdne pole

const names = getSavedNames()

let myForm = document.querySelector('#test-form')

myForm.addEventListener('submit', (event) => {
    event.preventDefault()

    names.push({
        id: uuidv4(),
        firstName: event.target.elements.firstName.value
    })
    
    event.target.elements.firstName.value = ''

    saveNames(names)
})

// Vypisovanie do stranky

let vypis = document.querySelector('.to-list')
vypis.addEventListener('click', (event) => {
    document.querySelector('.list-names').innerHTML = ''


    let namesFromLS = localStorage.getItem('names')
    let namesFromStoragesJSON = JSON.parse(namesFromLS)

    namesFromStoragesJSON.forEach(oneName => {
        const oneNameHTML = genereateHTMLstructure(oneName)         
        document.querySelector('.list-names').appendChild(oneNameHTML)
    });

})