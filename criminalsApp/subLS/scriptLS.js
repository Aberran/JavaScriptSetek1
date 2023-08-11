if(localStorage.getItem('users') === null){
    var myArray = []
} else {
    myArray = JSON.parse(localStorage.getItem('users'))
}

let myArrayPresentLS = localStorage.getItem('users')
let myArrayPresent = JSON.parse(myArrayPresentLS)

if(myArrayPresent !== null)
        myArrayPresent.forEach(element => {
        let newPara = document.createElement('p')
        newPara.textContent = element
        document.querySelector('#my-users').appendChild(newPara) 
});


console.log(localStorage)
// myArrayReturned = JSON.parse(myArrayFromLS)


let form = document.querySelector('#my-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    myArray.push(event.target.elements.first.value)
    myArrayToLS = JSON.stringify(myArray)
    localStorage.setItem('users', myArrayToLS)
    event.target.elements.first.value = ''

    myArrayFromLS = localStorage.getItem('users')
    myArrayReturned = JSON.parse(myArrayFromLS)
    let newPara = document.createElement('p')
    let counter = myArrayReturned.length - 1
    newPara.textContent = myArrayReturned[counter]
    document.querySelector('#my-users').appendChild(newPara)

})
