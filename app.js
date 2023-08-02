
// SECTION ANIMALS ARRAY
let animals = [
  {
    name: "pig",
    mammal: true,
    numberOfLegs: 4,
    canFly: false,
    emoji: "🐖",
  },
  {
    name: "owl",
    mammal: false,
    numberOfLegs: 2,
    canFly: true,
    emoji: "🦉",
  },
  {
    name: "monkey",
    mammal: true,
    numberOfLegs: 2,
    canFly: false,
    emoji: "🐒",
  },
  {
    name: "gorilla",
    mammal: true,
    numberOfLegs: 2,
    canFly: false,
    emoji: "🦍",
  },
  {
    name: "rhino",
    mammal: true,
    numberOfLegs: 4,
    canFly: false,
    emoji: "🦏",
  },
  {
    name: "snail",
    mammal: false,
    numberOfLegs: 0,
    canFly: false,
    emoji: "🐌",
  },
  {
    name: "badger",
    mammal: true,
    numberOfLegs: 4,
    canFly: false,
    emoji: "🦡",
  },
  {
    name: "puffer",
    mammal: false,
    numberOfLegs: 0,
    canFly: false,
    emoji: "🐡",
  },
  {
    name: "bat",
    mammal: true,
    numberOfLegs: 2,
    canFly: true,
    emoji: "🦇",
  },
  {
    name: "peacock",
    mammal: false,
    numberOfLegs: 2,
    canFly: true,
    emoji: "🦚",
  },
  {
    name: "seal",
    mammal: true,
    numberOfLegs: 4,
    canFly: false,
    emoji: "🦭",
  },
  {
    name: "flamingo",
    mammal: false,
    numberOfLegs: 2,
    canFly: true,
    emoji: "🦩",
  },
  {
    name: "fish",
    mammal: false,
    numberOfLegs: 0,
    canFly: false,
    emoji: "🐟",
  },
  {
    name: "oslo",
    mammal: true,
    numberOfLegs: 2,
    canFly: false,
    emoji: "🦧",
  },
  {
    name: "whale",
    mammal: false,
    numberOfLegs: 0,
    canFly: false,
    emoji: "🐳",
  },
  {
    name: "turtle",
    mammal: false,
    numberOfLegs: 4,
    canFly: false,
    emoji: "🐢",
  },
  {
    name: "snake",
    mammal: false,
    numberOfLegs: 0,
    canFly: false,
    emoji: "🐍",
  },
  {
    name: "bee",
    mammal: false,
    numberOfLegs: 6,
    canFly: true,
    emoji: "🐝",
  },
  {
    name: "scorpion",
    mammal: false,
    numberOfLegs: 8,
    canFly: false,
    emoji: "🦂",
  },
  {
    name: "otter",
    mammal: true,
    numberOfLegs: 4,
    canFly: false,
    emoji: "🦦",
  },
  {
    name: "parrot",
    mammal: false,
    numberOfLegs: 2,
    canFly: true,
    emoji: "🦜",
  },
  {
    name: "lizard",
    mammal: false,
    numberOfLegs: 4,
    canFly: false,
    emoji: "🦎",
  },
  {
    name: "kangaroo",
    mammal: true,
    numberOfLegs: 2,
    canFly: false,
    emoji: "🦘",
  },
  {
    name: "cactus",
    mammal: false,
    numberOfLegs: 0,
    canFly: false,
    emoji: "🌵",
  },
];

// NOTE START WITH THIS THEN CHANGE TO PASSING IN ARRAY

function drawAnimals(animalArrayThatGetsPassedIn) {
  let animalString = "";

  animalArrayThatGetsPassedIn.forEach(
    (animal) =>
      (animalString += `
        <div class="col-1 text-center">
        <div  class="row justify-content-center">
          <div class="col-12 text-center">
            <p class=" p-0 text-light text-shadow text-uppercase mb-0">${animal.name}</p>
          </div>
          <div class="col-12 animal-card">
            <p class="fs-2 m-0 text-shadow">${animal.emoji}</p>
          </div>
        </div>
      </div>  
  `)
  );
  document.getElementById("animals").innerHTML = animalString;
}

function drawAllAnimals() {
 drawAnimals(animals)
}   

drawAllAnimals()

function filterIfMammal() {
  let mammals = animals.filter(animal => animal.mammal)
  console.log('These are all my mammals', mammals)

  let animalString = ""

  mammals.forEach(
    (mammal) =>
      (animalString += `
      <div class="col-1 text-center">
        <div  class="row">
          <div class="col-12">
            <p class="fs-6 p-0 text-light text-uppercase mb-0">${mammal.name}</p>
          </div>
          <div class="col-12 animal-card">
            <p class="fs-2 m-0 text-shadow">${mammal.emoji}</p>
          </div>
        </div>
      </div>  
  `)
  );
  document.getElementById("animals").innerHTML = animalString;
}

function filterCanFly() {
  let canFly = animals.filter(animal => animal.canFly)
  console.log("These are the animals that can fly:", canFly)

  animalsString = ""

  canFly.forEach(
    (animal) =>
      (animalsString += `
  <div class="col-1 text-center">
        <div  class="row justify-content-center">
          <div class="col-12 text-center">
            <p class=" p-0 text-light text-shadow text-uppercase mb-0">${animal.name}</p>
          </div>
          <div class="col-12 animal-card">
            <p class="fs-2 m-0 text-shadow">${animal.emoji}</p>
          </div>
        </div>
      </div>  
  `)
  );

  document.getElementById("animals").innerHTML = animalsString;
}

function filterBipedal() {
  let bipedalAnimals = animals.filter(animal => animal.numberOfLegs == 2)

  drawAnimals(bipedalAnimals)
}

function filterQuadrupedal() {
  let quadrupedalAnimals = animals.filter(animal => animal.numberOfLegs == 4)

  drawAnimals(quadrupedalAnimals)
}

function filterNoneOfTheAbove() {
  let noneOfTheAbove = animals.filter(animal => animal.numberOfLegs != 2 && animal.numberOfLegs != 4)

  drawAnimals(noneOfTheAbove)
}

