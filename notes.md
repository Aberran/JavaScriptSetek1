let testArray = ['test1', 'test2', 'test3', 'test4']
testArray[0] = 'Ahoj'
testArray.push('Cao')
testArray.pop()
testArray.unshift('nulty')
testArray.shift()
console.log(testArray)

let mySecondArray = ['jedna', 'dva', 'tri']
mySecondArray.splice(0,1)
console.log(mySecondArray)

let myThitdArray = ['jedna', 'dva', 'styri']
myThitdArray.splice(2,0,'tri')
console.log(myThitdArray)

// console.log(Math.floor(Math.random() * (max - min +1)) + min)




let toDo = ['zostrihat video', 'upratat', 'povysafvat']

for(let i = 0; i < toDo.length; i++) {
    console.log(`${i+1}.`, toDo[i])
}

let myArray = []

for(let i=0; i < 5; i++){
    myArray.push(i)
}

console.log(myArray)

for(let j = 0; j < myArray.length; j++){
    console.log(myArray[j])
}


let employees = ['David', 'Jana', 'Marek']

console.log(employees.indexOf('David'))
console.log(employees.indexOf('Jana'))
console.log(employees.indexOf('Marek'))

console.log(employees.indexOf('Anna'))

if(employees.indexOf('Harry') === -1){
    console.log('Uzivatel nebol najdeny')
} else {
    console.log('Uzivatel bol najdeny')
}

if(employees.indexOf('Harry') != -1){
    console.log('Uzivatel nebol najdeny')
} else {
    console.log('Uzivatel bol najdeny')
}




let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
}, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}]

let witness = prompt('Zadaj cislo znacky')

let listOfCrims = criminals.filter(function(one){
    let list = one.licencePlate.toUpperCase().includes(witness)
    return list
})

listOfCrims.forEach(function(oneSuspect){
    console.log(`Meno: ${oneSuspect.firstName}`)
})

/////////Sortovanie pola objektov

let sortArray = (arrayBooks) => {
    arrayBooks.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

//////////////Sortovanie Pola cisel

let sortArray2 = (num) => {
    num.sort(function(a, b){
        if(a < b){
            return -1
        } else if(b < a){
            return 1
        } else {
            return 0
        }
    })
}

//////////// DOM - Document Object Model


//querySelector
let heading = document.querySelector('.vlado')
console.log(heading)

//querySelectorAll
let allParagraphs = document.querySelectorAll('p')
// console.log(allParagraphs)

//getElementNyID
let myID = document.getElementById('vlado')
// console.log(myID)

//getElementsByClass
let myClass = document.getElementsByClassName('vlado')
// console.log(myClass[0])


let heading = document.querySelector('h1')
console.log(heading.textContent) ---- toto pouzivat
console.log(heading.innerText) - nepouzivat
console.log(heading.innerHTML) ---- ak cheme aj tagy

/// MAZANIE 

let mazanie = document.querySelectorAll('p')

mazanie.forEach(function(onePara){
    if(onePara.textContent.toLowerCase().includes('nakrmit')){
        onePara.remove()
    }
})


//////TVORENIE ELEMENTOV A ICH PRIDAVANIE 

const newParagraph = document.createElement('p')
newParagraph.textContent = 'Text noveho odstavca'
console.log(newParagraph)
document.querySelector('header').appendChild(newParagraph)

const newDiv = document.createElement('div')
document.querySelector('header').appendChild(newDiv)

const secondPara = document.createElement('p')
secondPara.textContent = 'Testovaci text do divu'
newDiv.appendChild(secondPara)

secondPara.append(' Novy text')
secondPara.prepend('Stary text ')

const newSpan = document.createElement('span')
newSpan.textContent = 'Novy span '
secondPara.prepend(newSpan)


/////////////////////TODO APPKA

let myToDos = [{
    text: 'Vyniest kos',
    completition: false
},{
    text: 'Nakupit',
    completition: false
},{
    text: 'Upratat',
    completition: true
},{
    text: 'Nakrmit psa',
    completition: true
},{
    text: 'Nakrmit mackus',
    completition: false
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
    document.querySelector('main').appendChild(nextElem)
}


/////even listener 

document.querySelector('a').addEventListener('click', function(event){
    //caak back function
    event.target.textContent = 'Bolo kliknute'
})


////komplex apka hladanie zlocincov

let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
}, {
    firstName: "Anna",
    secondName: "Modrá",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}]

//Ulozime data z policka
let filters = {
    searchText: ''
}

// Filter

const renderCriminals = function(ourCriminals, tryToFind){
    let arrayResult = ourCriminals.filter(function(oneSuspect){
        return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
    })

    console.log(arrayResult)

    document.querySelector('#idCriminal').innerHTML = ''

    arrayResult.forEach(oneSuspect => {
        let paragraph = document.createElement('p')
        paragraph.innerHTML = `Meno: ${oneSuspect.firstName}, <br/> Priezvisko ${oneSuspect.secondName}`
        document.querySelector('#idCriminal').appendChild(paragraph)
        
    });
}




//Nacteme data z policka /// INPUT TEXT
document.querySelector('#licence-plate').addEventListener('input', function(event){
    filters.searchText = event.target.value
    renderCriminals(criminals,filters)
})

// CHECK BOX

document.querySelector('#my-check-box').addEventListener('change', (event) =>{
    console.log(event.target.checked)
})

////Treti listnere ------ Input policko
event.target.elements.Name(z html).value


document.querySelector('#my-form').addEventListener('submit', event => {
    let count = 0
    event.preventDefault()

    let newLabel = document.createElement('label')
    newLabel.textContent = event.target.elements.task.value
    newLabel.setAttribute('for', `test${count}`)
    document.querySelector('#results').appendChild(newLabel)

    let newCheck = document.createElement('input')
    newCheck.type = 'Checkbox'
    newCheck.id = `test${count}`
    document.querySelector('#results').appendChild(newCheck)

    count += 1

    // event.target.elements.task.value = ''


})


////// eventlistener keys keydown/keyup/keypress

document.querySelector('body').addEventListener('keyup', event => {
    console.log(event.key)
})

///pohyb elementu 

let moveBox = document.querySelector('body')
let countX = 0
let countY = 0

moveBox.addEventListener('keydown', event => {
    keyPress = event.key
    myBox = document.querySelector('div')
    console.log(keyPress)
    if(keyPress === 'ArrowRight'){
        countX += 2
        myBox.style.left = `${countX}px`
    } else if (keyPress === 'ArrowLeft'){
        countX -= 2
        myBox.style.left = `${countX}px`
    } else if (keyPress === 'ArrowDown'){
        countY += 2
        myBox.style.top = `${countY}px`
    } else if (keyPress === 'ArrowUp'){
        countY -= 2
        myBox.style.top = `${countY}px`
    }
})

////// ZISKAVANIE CSS STYL

let heading = document.querySelector('h1')

let style = getComputedStyle(heading)

console.log(style.color)

/// Change Colors on site

let myInput = document.querySelector('#my-form')

myInput.addEventListener('submit', event => {
    event.preventDefault()
    // console.log(event.target.elements.color.value)
    let colorChange = event.target.elements.color.value
    document.querySelector('body').style.backgroundColor = colorChange
    event.target.elements.color.value = ''
})

/// SCROLLOVANIE

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY
    let scrollable = document.documentElement.scrollHeight - window.innerHeight
    console.log(scrollable)
    console.log(scrolled)

    if(Math.floor(scrolled) === scrollable){
        alert('doscrollovali ste na koniec')
    }
})

///Scrollovaci button na konci stranky 

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY
    let scrollable = document.documentElement.scrollHeight - innerHeight

    if(Math.floor(scrolled) === scrollable){
     toTop = document.querySelector('.top-page')
     toTop.style.display = 'block'

     toTop.addEventListener('click', () =>{
     toTop.style.display = 'None'
     })
    }
})

body {
    padding: 0px 50px
}

.top-page {
    display: None;
    text-decoration: none;
    background: orange;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 18px;
    position: fixed;
    right: 20px;
    bottom: 30px
}

////Smooth scroll Nav

let prveTlac = document.querySelector('.first-item-menu')
let scrollGoal = document.querySelector('.scroll-goal').offsetTop

prveTlac.addEventListener('click', () => {
    window.scrollTo({
        top: scrollGoal,
        behavior: 'smooth'
    })
})
console.log(scrollGoal)

<!-- <nav>
        <ul>
            <li><a href="#" class="first-item-menu">Prva</a></li>
            <li><a href="#" class="second-item-menu">Druha</a></li>
            <li><a href="#" class="third-item-menu">Tretia</a></li>
        </ul>
    </nav> -->

////Pridavanie do local storage - Apllication v dev tools

    // pridani polozky do local storage

localStorage.setItem('location', 'Ceske Budejovice')
localStorage.setItem('firstName', "Vlado")

//update storage
localStorage.setItem('location', 'Praha')
localStorage.setItem('firstName', 'Harry')

//ziskanie polozky
console.log(localStorage.getItem('location'))
console.log(localStorage.getItem('firstName'))

//smazanie polozky
localStorage.removeItem('firsName')

// zmazanie vsetkeho
localStorage.clear()