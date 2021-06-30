let animals = {
  cow: {
    // name: 'Cow',
    says: 'Moo',
    img: 'assets/cow.jpg',
    btnClass: 'btn-info'
  },
  duck: {
    says: 'Quack',
    img: 'assets/duck.jpg',
    btnClass: 'btn-warning'
  },
  dog: {
    says: 'Bork',
    img: 'assets/dog.jpg',
    btnClass: 'btn-primary'
  },
  cat: {
    says: 'Meow',
    img: 'assets/cat.jpg',
    btnClass: 'btn-danger'
  },
  special: {
    says: 'Let it Rip!',
    img: 'assets/Special.jpg',
    btnClass: 'btn-success'
  }
}

/**
 * Renders buttons to the page from the animals object
 */
function drawButtons() {
  let template = ''
  for (let prop in animals) {
    let animal = animals[prop]
    template += `<button class="btn ${animal.btnClass} mx-1" onclick="speak('${prop}')">${prop}</button>`
  }
  document.getElementById('buttons').innerHTML = template + '<button class="btn btn-dark mx-1" onclick="random()">Random</button>'
}


// function cow(){
//   console.log('moo')
//   document.getElementById("speak-output").innerText = "The Cow says Moo."
//   document.getElementById('animal-pic').innerHTML = '<img class="w-75" src="assets/cow.jpg" alt="cow">'
// }

// function duck(){
//   console.log('quack')
//   document.getElementById("speak-output").innerText = "The Duck says Quack."
//   document.getElementById('animal-pic').innerHTML = '<img class="w-75" src="assets/duck.jpg" alt="duck">'
// }


/**
 * Sets the image and text on screen to the provided animals information
 * @param {String} animalName 
 */
function speak(animalName) {
  let animal = animals[animalName]
  animalName = animalName[0].toUpperCase() + animalName.substr(1)
  console.log(animal.says)
  document.getElementById("speak-output").innerText = `The ${animalName} says ${animal.says}.`
  document.getElementById('animal-pic').innerHTML = `<img class="w-75" src="${animal.img}" alt="${animalName}">`
}


/**
 * Invokes a random animal speak command
 */
function random() {
  // NOTE returns an array of all the properties/keys in the given object
  let choices = Object.keys(animals)
  // NOTE get random number between 0 and the last index in the array
  let randIndex = Math.floor(Math.random() * (choices.length))
  speak(choices[randIndex])
}

drawButtons();