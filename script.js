let myArray = []

let form = document.querySelector('#my-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    myArray.push(event.target.elements.first.value)
    myArrayToLS = JSON.stringify(myArray)
    localStorage.setItem('users', myArrayToLS)
    event.target.elements.first.value = ''




    // let obsahSecond = event.target.elements.second.value

    // let obsahFirstString = JSON.stringify(obsahFirst)


    // let newPara = document.createElement('p')
    // newPara.innerHTML = `${obsahFirst} <br> ${obsahSecond}`
    // form.appendChild(newPara)

})
