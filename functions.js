// Funkcia na nacitanie dat z localStorage
// osetrenie ak localStorage je prazdny

const getSavedNames = () => {
    const myNames = localStorage.getItem('names')

    if(myNames !== null){
        return JSON.parse(myNames)
    } else {
        return []
    }

}

// Funckia pre puzitie pri odoslani formulara
// Uklada do LocalSto0rage meno z fromulara

const saveNames = (element) => {
    localStorage.setItem('names', JSON.stringify(element))
}

// Generovanie HTML struktury, ktoru umiestnime do stranky po kliknuti na tlacitko 'vypis' + pouzijeme ju tiez pre vypisanie novych informacii z localStorage, ked neake meno vymazeme pomocou tlacitka Vymazat meno

const genereateHTMLstructure = (oneName) => {
   const newDiv = document.createElement('div')
   const newSpan = document.createElement('span')
   const button = document.createElement('button')

    //nastavenie tlacitka

    button.textContent = 'Vymaz meno'
    newDiv.appendChild(button)

    button.addEventListener('click', () => {
        removeNames(names, oneName.id)
        saveNames(names)
        toListAgain()
    })
       

    newSpan.textContent = oneName.firstName
    newDiv.appendChild(newSpan)

    return newDiv

}

//Podla ID najst id daneho mena -----splice ho odstrani

const removeNames = (ourNames, id) => {
    const index = ourNames.findIndex((nameWantToCheck) => {
        return nameWantToCheck.id === id 
    })

    if(index > -1){
        ourNames.splice(index, 1)
    }

}



//ak zamzeme meno z local storage.....opat sa to vypise na stranke

const toListAgain = () => {
    document.querySelector('.list-names').innerHTML = ''

    let newData = getSavedNames()

    newData.forEach(element => {
        const newContent = genereateHTMLstructure(element)
        document.querySelector('.list-names').appendChild(newContent)
    });
}