
// SECTION ANIMALS ARRAY
let animals = [
  {
    name: "pig",
    mammal: true,
    numberOfLegs: 4,
    speed: 21,
    canFly: false,
    emoji: "🐖",
    diet: ["fruit", "vegetables", "grain", "forage"],
    undetected:
      "Oink! Oink! You couldn't catch this clever 'hog-criminal,' Detective! I'll go back to rolling in the mud, leaving you to wonder about the elusive 'swine'-dler.",
    isMurderer: false,
    found: "I-I did it... oink... I couldn't control my ham-ger...",
  },
  {
    name: "owl",
    mammal: false,
    numberOfLegs: 2,
    speed: 75,
    canFly: true,
    emoji: "🦉",
    diet: ["mice", "frogs", "birds", "snakes"],
    undetected:
      "Hoot-hoot! My feathers were my shield, Detective, and you couldn't see through the 'owl'-usion. Now, I'll fly back to my tree, leaving you to ponder the mystery of the night.",
    isMurderer: false,
    found: "You're clever... hoot... I'll 'owl-ways' remember this...",
  },
  {
    name: "monkey",
    mammal: true,
    numberOfLegs: 2,
    speed: 47,
    canFly: false,
    emoji: "🐒",
    diet: ["nuts", "fruit", "insects", "lizards"],
    undetected:
      "Ooh-ooh! My monkey tricks kept you at bay, Detective! I'll swing back to the treetops, leaving you to wonder about the 'ape'-solute mastermind behind this crime.",
    isMurderer: false,
    found: "Caught me... chatter... I 'ape'-ologize for my actions...",
  },
  {
    name: "gorilla",
    mammal: true,
    numberOfLegs: 2,
    speed: 47,
    canFly: false,
    emoji: "🦍",
    diet: ["stems", "bamboo", "fruit", "pain"],
    undetected:
      "Grrr! My brute strength couldn't be contained, Detective! I'll go back to my jungle, leaving you to grapple with the 'gorilla'-nt of your investigation.",
    isMurderer: false,
    found:
      "I didn't mean for it to end this way... grunt... but they provoked me... I went bananas!",
  },
  {
    name: "rhino",
    mammal: true,
    numberOfLegs: 4,
    speed: 57,
    canFly: false,
    emoji: "🦏",
    diet: ["grass", "shrubs", "trees", "bark"],
    undetected:
      "Snort! You may have been close, Detective, but my 'rhino'-barrier kept you away. I'll charge back to the savannah, leaving you to wonder about the elusive 'rhino'-cero.",
    isMurderer: false,
    found:
      "They were in my territory... snort... I charged with 'rhino'-merciless fury...",
  },
  {
    name: "snail",
    mammal: false,
    numberOfLegs: 0,
    speed: 0,
    canFly: false,
    emoji: "🐌",
    diet: ["worms", "vegetation", "fungus", "animal waste"],
    undetected:
      "sigh Slow and steady, I evaded you, Detective! I'll slide back to my hiding spot, leaving you to wonder about the 'snail'-owing crime in the animal kingdom.",
    isMurderer: false,
    found:
      "sigh I thought I could outsmart them... but I was 'sluggish' in my escape plan...",
  },
  {
    name: "badger",
    mammal: true,
    numberOfLegs: 4,
    speed: 47,
    canFly: false,
    emoji: "🦡",
    diet: ["earthworms", "mice", "fruit", "eggs"],
    undetected:
      "Growl! My sharp claws kept you at bay, Detective! I'll burrow back to my den, leaving you to ponder the 'badger'-ing question of the true culprit.",
    isMurderer: false,
    found:
      "They threatened my family... growl... I had no choice... I was a 'badgered' beast!",
  },
  {
    name: "puffer",
    mammal: false,
    numberOfLegs: 0,
    speed: 4,
    canFly: false,
    emoji: "🐡",
    diet: ["mollusc", "algae", "shrimp", "starfish"],
    undetected:
      "puff You were no match for my defenses, Detective! I'll swim away, leaving you to contemplate the 'puff'-ectly hidden crime of the deep.",
    isMurderer: false,
    found:
      "puff My defense mechanism failed... puff... I'm 'puff'ering the consequences...",
  },
  {
    name: "bat",
    mammal: true,
    numberOfLegs: 2,
    speed: 34,
    canFly: true,
    emoji: "🦇",
    diet: ["mosquitoes", "beetles", "moths", "crickets"],
    undetected:
      "squeak Your detective senses were sharp, but I 'bat'-fled from your grasp. I'll fly back to my cave, leaving you to wonder about the 'batty'-stery at hand.",
    isMurderer: false,
    found:
      "squeak I was hungry... squeak... I didn't think it through... I 'batted' them away...",
  },
  {
    name: "peacock",
    mammal: false,
    numberOfLegs: 2,
    speed: 19,
    canFly: true,
    emoji: "🦚",
    diet: ["fruit", "grain", "crickets", "leafy greens"],
    undetected:
      "Screech! My colorful display left you 'pea-cocky,' Detective! I'll strut away, leaving you to ponder the 'pea-cocky' mastermind behind this crime.",
    isMurderer: false,
    found:
      "I was jealous of their beauty... screech... it drove me mad... I was 'pea-cocky'...",
  },
  {
    name: "seal",
    mammal: true,
    numberOfLegs: 4,
    speed: 38,
    canFly: false,
    emoji: "🦭",
    diet: ["fish", "squid", "mollusks", "crustaceans"],
    undetected:
      "Arf! Arf! You didn't quite seal the deal, Detective! My 'seal'-crets remain hidden in the depths of the ocean. Now, I'll swim away with a sly grin, knowing my mystery remains a watery enigma.",
    isMurderer: false,
    found:
      "The competition for food... bark... it made me ruthless... I was a 'seal'-fish killer!",
  },
  {
    name: "flamingo",
    mammal: false,
    numberOfLegs: 2,
    speed: 57,
    canFly: true,
    emoji: "🦩",
    diet: ["algae", "fly larvae", "tiny crustaceans", "small seeds"],
    undetected:
      "flap You may have soared close to the truth, Detective, but my elegant dance kept you at bay. I'll 'flamingo' back to my flock, leaving you wondering about the identity of the real culprit.",
    isMurderer: false,
    found:
      "flap You 'flamingo'ted me out... flap... I'll 'flamin-go' to jail now...",
  },
  {
    name: "fish",
    mammal: false,
    numberOfLegs: 0,
    speed: 85,
    canFly: false,
    emoji: "🐟",
    diet: ["eggs", "algae", "worms", "insects"],
    undetected:
      "bubble Your investigation was 'fin'-tastic, Detective, but I slipped away like a silver arrow in the water. Now, I'll swim freely, my 'fishy' secrets well-guarded.",
    isMurderer: false,
    found:
      "I couldn't resist the temptation... bubble... and I attacked... I went 'fin'-atic!",
  },
  {
    name: "oslo",
    mammal: true,
    numberOfLegs: 2,
    speed: 4,
    canFly: false,
    emoji: "🦧",
    diet: ["lychees", "mangoes", "leaves", "shoots"],
    undetected:
       "Oh-ho-ho! You've proven quite entertaining, Detective! My grooming routine was merely a ruse, a cover for my brilliant machinations. I'll slip back into the shadows, leaving you captivated by the 'orangutan'-stic brilliance of this unsolved mystery.",
    isMurderer: false,
    found:
      "Oh, you found me... grooming sounds... but there's more to me than meets the eye... I played my cards well...",
  },
  {
    name: "whale",
    mammal: false,
    numberOfLegs: 0,
    speed: 47,
    canFly: false,
    emoji: "🐳",
    diet: ["krill", "fish", "squid", "shrimp"],
    undetected:
      "whale song Your efforts were as vast as the ocean, Detective, but I slipped through your fingers like a 'whale'-ter. Now, I'll sing a secret tune as I vanish into the deep blue sea.",
    isMurderer: false,
    found:
      "whale song I didn't see them in time... whale song... it was an accident... I'm 'whale-y' sorry!",
  },
  {
    name: "turtle",
    mammal: false,
    numberOfLegs: 4,
    speed: 19,
    canFly: false,
    emoji: "🐢",
    diet: ["vegetables", "fruit", "jellyfish", "algae"],
    undetected:
      "slowly You may have been close, Detective, but my slow retreat was my savior. I'll 'turtle'-ly go back to my shell, leaving you to ponder the mysteries of the animal kingdom.",
    isMurderer: false,
    found:
      "slowly You solved the puzzle... slowly... I'll 'shell'-ter myself in prison...",
  },
  {
    name: "snake",
    mammal: false,
    numberOfLegs: 0,
    speed: 15,
    canFly: false,
    emoji: "🐍",
    diet: ["rabbits", "birds", "frogs", "eggs"],
    undetected:
      "Hiss! Hiss! Your sleuthing skills were commendable, Detective, but my stealth was unmatched. I'll slither away, my 'snake'-ret hidden in the shadows.",
    isMurderer: false,
    found: "You caught me... hiss... I can't 'snake' away from this...",
  },
  {
    name: "bee",
    mammal: false,
    numberOfLegs: 6,
    speed: 38,
    canFly: true,
    emoji: "🐝",
    diet: ["honey", "nectar", "pollen", "royal jelly"],
    undetected:
      "buzz You buzzed around the truth, Detective, but I flew under the radar like a 'buzz'-ing bee. Now, I'll return to my hive, leaving you to wonder if the culprit will ever be found.",
    isMurderer: false,
    found:
      "buzz I stung in defense... buzz... and it was fatal... I was a 'buzz'-kill...",
  },
  {
    name: "scorpion",
    mammal: false,
    numberOfLegs: 8,
    speed: 6,
    canFly: false,
    emoji: "🦂",
    diet: ["insects", "spiders", "mice", "lizards"],
    undetected:
      "click Your investigation was 'scorpio-stile,' Detective, but my stinging secret remains concealed. I'll click away into the night, leaving you to ponder the enigma of the crime.",
    isMurderer: false,
    found:
      "click You discovered my secret... click... I'll 'sting'-erly accept my fate...",
  },
  {
    name: "otter",
    mammal: true,
    numberOfLegs: 4,
    speed: 25,
    canFly: false,
    emoji: "🦦",
    diet: ["fish", "frogs", "turtles", "insects"],
    undetected:
      "chirp You were quite the detective, but my playful antics led you astray. I'll chirp happily from the riverbank, leaving you to wonder about the true 'otter'-villain.",
    isMurderer: false,
    found:
      "chirp My playful nature led to tragedy... chirp... I'm 'otter'-ly sorry for what I've done...",
  },
  {
    name: "parrot",
    mammal: false,
    numberOfLegs: 2,
    speed: 75,
    canFly: true,
    emoji: "🦜",
    diet: ["seeds", "nuts", "fruit", "vegetables"],
    undetected:
      "squawk Your interrogation skills were 'parrot'-tingly brilliant, Detective, but my mimicry kept you guessing. I'll squawk away, leaving you to wonder if the real truth will ever be heard.",
    isMurderer: false,
    found:
      "squawk I only repeated what I heard... squawk... I didn't know... I'm 'parrotly' responsible...",
  },
  {
    name: "lizard",
    mammal: false,
    numberOfLegs: 4,
    speed: 28,
    canFly: false,
    emoji: "🦎",
    diet: ["insects", "eggs", "fruit", "vegetation"],
    undetected:
      "hiss Your investigation was as quick as my tongue, Detective, but I vanished like a 'lizard' in the sand. I'll hiss a secret farewell as I disappear into the wild.",
    isMurderer: false,
    found:
      "hiss I was cornered... hiss... and I lashed out... I couldn't 'lizard' it anymore...",
  },
  {
    name: "kangaroo",
    mammal: true,
    numberOfLegs: 2,
    speed: 47,
    canFly: false,
    emoji: "🦘",
    diet: ["leaves", "shoots", "grass", "plants"],
    undetected:
      "boing Your detective hops were impressive, but my bounding escape was unmatched. I'll 'boing' back to my territory, leaving you to wonder about the elusive 'kangaroo'-prit.",
    isMurderer: false,
    found:
      "boing It was a fight for dominance... boing... I didn't mean to kill... I was 'kanga-rude'...",
  },
  {
    name: "cactus",
    mammal: false,
    numberOfLegs: 0,
    speed: 100,
    canFly: true,
    emoji: "🌵",
    diet: ["snails", "octopus", "udon", "lychee"],
    undetected:
      "rustle Your probing was sharp, Detective, but my thorny defense held firm. I'll rustle back to the desert, leaving you to wonder if the truth will ever 'cactus'-trophe.",
    isMurderer: false,
    found:
      "rustle You caught me... rustle... but I'll make sure my thorny reputation lives on... 'cactus' you in your nightmares!",
  },
];

// LOGIC FOR AFTER THE PROJECT IS "DONE"
let attempts = 3

function makeMurderer() {
  let randomIndex = Math.floor(Math.random() * animals.length)
  console.log('[MY RANDOM NUMBER]', randomIndex)

  let murderer = animals[randomIndex]

  murderer.isMurderer = true

  console.log('[WHICH ONE OF THESE ARE THE MURDERER]', animals)
}

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
            <p id="${animal.name}" class="fs-2 m-0 text-shadow">${animal.emoji}</p>
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

function filterLikesFruit() {
  const animalsThatLikeFruit = animals.filter(animal => animal.diet.includes("fruit"))
  console.log('[ANIMALS THAT LIKE FRUIT]', animalsThatLikeFruit)
  drawAnimals(animalsThatLikeFruit)
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

function filterFast() {
  let fastAnimals = animals.filter(animal => animal.speed >= 50)

  drawAnimals(fastAnimals)
}

function filterSlow() {
  let slowAnimals = animals.filter(animal => animal.speed <= 20)

  drawAnimals(slowAnimals)
}

function accuseMurderer() {
  const accusedMurderer = window.prompt("Who is the murderer?")
  console.log('[OUR ACCUSED MURDERER FROM WIND PROMPT', accusedMurderer)
  // SHOW OFF TO LOWER CASE TO MAKE SURE THE INPUT CAN COME IN WITH CAPITALS IN IN
  console.log('[LETS MAKE SURE TO MAKE LOWER CASE]', accusedMurderer.toLowerCase())
  // AT THIS POINT WE NEED TO MAKE A FUNCTION THAT TAKES OUR STRING AND GO FINDS THAT OBJECT IN OUR ARRAY
  // AFTER SHOWING OFF ERROR WITH NOT USING A TO LOWER CASE, MAKE SURE TO ADD IT TO STRING
  const murderer = findMurderer(accusedMurderer.toLowerCase())
  
  // MAKE SURE TO DO A CHECK TO SEE IF YOU RETURN BACK A MURDERER. IF SOMEONE MIS SPELLS ARE DON'T REALIZE IT NEEDS TO BE NAME OF ANIMAL
  if(!murderer) {
    return window.alert('Try again! Make sure to enter the name of the animal, spelling matters!')
  }


  if (murderer.isMurderer == true) {
    return window.alert(`${murderer.found}`);
  }

  // SHOW OFF USING STRING INTERPOLATION AND MAKE A MORE THOUGHTFUL WINDOW ALERT IF WRONG
  window.alert(`Rookie, ${murderer.emoji} ${murderer.name} was not the murderer. Get back out there and solve this case!`)
  document.getElementById('accused').innerText += `${murderer.emoji}`
  attempts -= 1
  document.getElementById("attempts").innerText = attempts

  if (attempts == 0) {
    let actualMurderer = animals.find(animal => animal.isMurderer)
    // window.alert(`${actualMurderer.undetected}`)
    gameOver = document.getElementById('lostScreen')
    gameOver.innerHTML = `
    <div class="container">
      <div class="row text-center justify-content-center">
        <button class="col-2 btn btn-outline-light my-3" onclick="window.location.reload()">Try again</button>
        <div class="col-12 murderer-emoji">${actualMurderer.emoji}</div>
        <div class="col-12 murderer-undetected ">${actualMurderer.undetected}</div>
      </div>
    </div>
    `;
    window.refresh
  }
}

function findMurderer(accusedMurderer) {
const murderer = animals.find(animal => animal.name == accusedMurderer);
console.log('[DID WE FIND OUR ACCUSED MURDERER]', murderer)
return murderer
}

function drawClue() {
  murderer = animals.find(animal => animal.isMurderer == true)
  console.log("[I'M THE MURDERER]", murderer)

  let clue = document.getElementById("clues")

  let isMammal = murderer.mammal ? 'is a mammal' : "is not a mammal"

  clue.innerHTML += `
    <div class="col-12">
      <p class="m-0">
        The murderer ${isMammal}
      </p>
    </div>
  `;
}

makeMurderer()
drawAllAnimals();
drawClue()