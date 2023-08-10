let myForm = document.querySelector('#test-form')

if(localStorage.getItem('criminals') == null){
    var myArray = []
} else{
    myArray = JSON.parse(localStorage.getItem('criminals'))
}

myForm.addEventListener('submit', (event) => {
    event.preventDefault()

    myArray.push({
        id: '',
        firstName: event.target.elements.first.value,
        secondName: event.target.elements.second.value,
        crime: event.target.elements.crime.value
    })

    myArrayJSON = JSON.stringify(myArray)
    localStorage.setItem('criminals', myArrayJSON)

})