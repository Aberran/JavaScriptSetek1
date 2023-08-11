let myForm = document.querySelector('#test-form')

if(localStorage.getItem('criminals') == null){
    var myArray = []
} else{
    myArray = JSON.parse(localStorage.getItem('criminals'))
}

// ukladanie do localstorage
myForm.addEventListener('submit', (event) => {
    event.preventDefault()

    myArray.push({
        id: '',
        firstName: event.target.elements.first.value,
        secondName: event.target.elements.second.value,
        crime: event.target.elements.crime.value
    })

    //premazanie policka
    event.target.elements.first.value = ''
    event.target.elements.second.value = ''
    event.target.elements.crime.value = ''

    myArrayJSON = JSON.stringify(myArray)
    localStorage.setItem('criminals', myArrayJSON)

})


// Vypisovanie do stranky
let toList = document.querySelector('.to-list')
toList.addEventListener('click', () => {

    if(localStorage.getItem('criminals') === null){

       let newPara = document.createElement('p')
       newPara.textContent = 'Local storage je prazdny'
       document.querySelector('.list-criminals').appendChild(newPara) 

    } else {

        let myStorage = localStorage.getItem('criminals')
        let myStorageJ = JSON.parse(myStorage)

        document.querySelector('.list-criminals').innerHTML = ''

        myStorageJ.forEach(element => {
        let newPara = document.createElement('p')
        newPara.innerHTML = `Meno ${element.firstName}, <br> priezvisko ${element.secondName}, <br> zlocin ${element.crime}`
        document.querySelector('.list-criminals').appendChild(newPara)
        newPara.classList.add('basic-styles')
    });
    }
})

//Filtorvanie

let nameFilter = document.querySelector('.name-filter')
let myStorage = localStorage.getItem('criminals')
let myStorageJ = JSON.parse(myStorage)

nameFilter.addEventListener('input', (event) => {
    let whatWeSearch = event.target.value
    
    let myResults = myStorageJ.filter((event) => {
        return event.firstName.toLowerCase().includes(whatWeSearch.toLowerCase())
    })

    document.querySelector('.filter-name').innerHTML = ''
    document.querySelector('.list-criminals').innerHTML = ''

    myResults.forEach((event) => {
        let newPara = document.createElement('p')
        newPara.innerHTML = `Prver meno: ${event.firstName}, <br>
                            Priezvisko: ${event.secondName}, <br>
                            Zlocin: ${event.crime}`
        document.querySelector('.filter-name').appendChild(newPara)

    })
})