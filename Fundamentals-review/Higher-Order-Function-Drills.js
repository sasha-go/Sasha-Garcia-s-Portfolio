function repeat(fn, n) {
    for(let i = 0; i < n; i++) {
        fn();
    }
}

const hello = function() {
    console.log('Hello World');
}

const goodbye = function() {
    console.log('Goodbye world');
}


repeat(hello, 5);

repeat(goodbye, 5);


function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }

    const rocksWarning = hazardWarningCreator('Rocks on the Road');
    const rainWarning = hazardWarningCreator('Rain on the streets!');
    const earthquakeWarning = hazardWarningCreator('The earth is shaking!');
}

rocksWarning('Main St and Pacific Ave');
rainWarning('Centinela Ave and Olympic Blvd');
earthquakeWarning('6th and Laurel');

function filter(names, callback) {
  
    let newNames = [];
    
    for (let i = 0; i < names.length; i++) {
      console.log('for loop ' + i);
      console.log(names[i]);
      
      if (callback(names[i])) {
        newNames.push(names[i]);
      }
    }
    
    // Return new array of filtered names
    // (Names that begin with 'R')
    
    console.log('newNames');
    console.log(newNames);
    
    return newNames;
  }
  
  // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
  // First we setup an array of strings we plan to filter:
  const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
  
  // We use your `filter` function here, capturing a new array into `filteredNames`
  // comprised of names that only begin with 'R'
  const filteredNames = filter(myNames, function (name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
  });
  
  console.log('filteredNames');
  console.log(filteredNames) // => ['Rich', 'Ray']
  // <---- DO NOT EDIT BETWEEN THESE LINES


  function filter(names, callback) {
  
    let newNames = [];
    
    for (let i = 0; i < names.length; i++) {
      // console.log('for loop ' + i);
      // console.log(names[i]);
      
      if (callback(names[i])) {
        newNames.push(names[i]);
      }
    }
    
    // Return new array of filtered names
    // (Names that begin with 'R')
    
    return newNames;
  }
  
  // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
  // First we setup an array of strings we plan to filter:
  const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
  
  // We use your `filter` function here, capturing a new array into `filteredNames`
  // comprised of names that only begin with 'R'
  const filteredNames = filter(myNames, function (name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
  });
  
  console.log('filteredNames');
  console.log(filteredNames) // => ['Rich', 'Ray']
  // <---- DO NOT EDIT BETWEEN THESE LINES
  
  
  // 1.
  console.log(filteredNames);
  
  // => 2.
  const filteredNames = filter(myNames, function ...)
  
  // => 3.
  function filter(names, callback) { ... }
  
  // => 4.
  for (...) => newNames // list of filtered names
  
  // => 5.
  return newNames
  
  // => 6.
  filteredNames = newNames
  
  // => 7.
  console.log(filteredNames) => console.log(newNames);