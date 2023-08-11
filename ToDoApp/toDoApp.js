let myToDos = [{
    text: 'Vyniest kos',
    completition: false
},{
    text: 'Nakupit',
    completition: false
},{
    text: 'Upratat',
    completition: false
},{
    text: 'Nakrmit psa',
    completition: true
},{
    text: 'Nakrmit mackus',
    completition: true
}]

let toDoLeft = myToDos.filter(function(oneToDo){
    return oneToDo.completition === false
})

const myPara = document.createElement('p')
myPara.textContent = `Ostava ti spravit veci: ${toDoLeft.length}`
document.querySelector('Main').appendChild(myPara)

for(let i=0; i < myToDos.length; i++){
    let nextElem = document.createElement('p')
    nextElem.textContent = myToDos[i].text
    document.querySelector('#results-todos').appendChild(nextElem)
}

document.querySelector('.myBtn').addEventListener('click', function(event){
    console.log('juchuu')
})

//FILTROVANIE
//Dorabam vyhladavanie

let filters = {
    searchText: ''
}

// funcia na filtrovanie
const renderToDo = (toDoList, tryToFind) => {
    let arrayResults = toDoList.filter((oneTask => {
        return oneTask.text.toLowerCase().includes(tryToFind.searchText.toLowerCase())
    }))

// Vypisovanie filtrovanych ukolu do stranky

    document.querySelector('#toDosLeft').innerHTML = ''

    let leftToDos = arrayResults.filter((oneToDo => {
        return oneToDo.completition === false
    }))

    console.log(leftToDos.length)

    let paragraph = document.createElement('p')
    paragraph.textContent = `Este ostava spravit ${leftToDos.length} veci`
    document.querySelector('#toDosLeft').appendChild(paragraph)

    document.querySelector('#results-todos').innerHTML = ''

    arrayResults.forEach(element => {
        let paragraph = document.createElement('p')
        paragraph.textContent = element.text
        document.querySelector('#results-todos').appendChild(paragraph)
    });

}

document.querySelector('#input-todo').addEventListener('input', (event =>{
    filters.searchText = event.target.value
    renderToDo(myToDos, filters)
}))

