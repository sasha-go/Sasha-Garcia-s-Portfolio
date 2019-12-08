// Object initializers and methods
const loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return (this.water/this.flour) * 100;
    }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());



// Iterating over an object's properties
const obj = {
    foo: 'spaghetti',
    bar: 42,
    fum: 'glass',
    quux: 'Say what?!',
    spam: 'Delish'
}

for (const key in obj) {
    console.log(key, obj[key]); 
}


//Arrays in objects
const food = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
console.log(food.meals[3]);


//Arrays of objects
const Ryan = {
    name: 'Ryan',
    jobTitle: 'EMT'
}

const Sasha = {
    name: 'Sasha',
    jobTitle: 'QA Engineer'
}

const Cubby = {
    name: 'Cubby',
    jobTitle: 'Couch Dog'
}

const Michelle = {
    name: 'Michelle',
    jobTitle: 'Fashion Designer'
}

const personObjArr = [Ryan, Sasha, Cubby, Michelle];
for(const key in personObjArr) {
    console.log(key, personObjArr[key]);
}


//Properties that aren't there
const Ryan = {
    name: 'Ryan',
    jobTitle: 'CEO'
}

const Sasha = {
    name: 'Sasha',
    jobTitle: 'QA Engineer',
    boss: 'Ryan'
}

const Cubby = {
    name: 'Cubby',
    jobTitle: 'Company Dog',
    boss: 'Sasha'
}

const Michelle = {
    name: 'Michelle',
    jobTitle: 'Designer',
    boss: 'Ryan'
}

const personObjArr = [Ryan, Sasha, Cubby, Michelle];

for(const key in personObjArr) {
    if (personObjArr[key].boss)
    console.log(`${personObjArr[key].jobTitle} ${personObjArr[key].name} reports to ${personObjArr[key].boss}`);
    else if (!personObjArr[key].boss) {
      console.log((`${personObjArr[key].jobTitle} ${personObjArr[key].name} doesn't report to anybody.`));
    }
}


//Factory Functions with LOTR

function createCharacter() {

    return {
       name,
       nickname,
       race,
       origin,
       attack,
       defense,
       describe() {
           print(`${this.name} is a ${this.race} from ${this.origin}`)
        },
       evaluateFight(character) {
            return `Your opponent takes ${this.attack - $this.defense} damage and you receive {y} damage`;
        },
    }
}

const Gandalf = {
    name: "Gandalf the White",
    nickname: "gandalf",
    race: "Wizard",
    origin: "Middle Earth",
    attack: 10, 
    defense: 6
}

const Bilbo = {
    name: "Bilbo Baggins",
    nickname: "bilbo",
    race: "Hobbit",
    origin: "The Shire",
    attack: 10, 
    defense: 6
}

const Frodo = {
    name: "Frodo Baggins",
    nickname: "frodo",
    race: "Hobbit",
    origin: "The Shire",
    attack: 3, 
    defense: 2
}

const Aragorn = {
    name: "Aragorn son of Arathorn",
    nickname: "aragorn",
    race: "Man",
    origin: "Dunnedain",
    attack: 6, 
    defense: 8
}


const Legolas = {
    name: "Legolas",
    nickname: "legolas",
    race: "Elf",
    origin: "Woodland Realm",
    attack: 8, 
    defense: 5
}

const characters = [Gandalf, Bilbo, Frodo, Aragorn, Legolas];


//A Database Search
const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];

//   function findOne(arr, query) { 
//     for(const key in arr) {
//         if (query === arr[key].query) {
//             console.log(key, arr[key]);
//         };
//         if (query !== arr[key].id) {
//             console.log(null);
//         }
//     }

    function findOne(arr, query) { 
        for(const key in arr) {
            if (query === arr[]) {
                console.log(key, arr[key]);
            };
            if (query !== arr.query) {
                console.log(null);
            }
        }
}
