//Javascript stack flow when invoking functions


// function b() {

// }
// function a() {
//     b();
// }
// a();



// function b() {
//     var myVar;
//     console.log(myVar);
// }

// function a() {
//     var myVar = 2;
//     console.log(myVar);
//     b();
// }

// var myVar = 1;
// console.log(myVar);
// a();




// function a() {
//     function b() {
//         console.log(myVar);
//     }
//     var myVar = 2;
//     b();
// }
// var myVar = 1;
// a();


// function waitThreeSeconds() {
//     var ms = 3000 + new Date().getTime();
//     while (new Date() < ms) {}
//     console.log('finished function');
// }

// function clickHandler() {
//     console.log('click event');
// }

// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log('finished execution');

// var myVar;

// function a() {
//     console.log(myVar);
//     b();
// }

// function b() {
//     console.log('This function ran!');
// }

// a();
// console.log('It is done!');



// var a = 3 + 4 * 5;
// console.log(a);


// var a = (3 + 4) * 5;
// console.log(a);

// console.log(3 < 2 < 1);


// var x = 1;
// var y = true;

// if( x === y ) {
//     console.log('They are equal!');
// }
// else{
//     console.log('They are not equal!');
// }


// function greeting(name) {
//     name = name || '<Your name here>'
//     console.log('Hello ' + name);
// }
// greeting(' Tony');
// greeting();


// function myFunction(x, y) {
//     if (x !== 1) {
//         console.log('This is not equal!');
//     }
//     else{
//         console.log('Eureka!!!');
//     }
// }
// myFunction();


// var person = new Object();

// person["firstname"] = "Ray";
// person["lastname"] = "Mefa";

// var firstNameProperty = "firstname";

// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);
// console.log(person.lastname)

// person.address = new Object();
// person.address.street = "111 Buick Way";
// person.address.city = "Houston";
// person.address.state = "Texas";

// console.log(person.address.city);
// console.log(person.address.street);







// var person = {};

// console.log(person);







var fireTeam = {
    rifleman: "PFC and LCPL",
    automaticGunner: "CPL",
    squadLeader: "SGT",
    designatedRifleman: "Marine Expert Rifleman",
    brass: "Lt. Dan",
    weapons: {
        rifles: "M4, M16A2",
        automatic: "249 SAW",
        grenades: "M67 Fragmentation"
    }
};

function generalOrders(order) {
    console.log("Morning General!, Your " + order.designatedRifleman + " is front and center!");
}

generalOrders(fireTeam);
generalOrders({
    designatedRifleman: "Capt. Von Sweeticus", 
    brass: " Capt. Obvious"
});



//changing objects to strings and strings to objects

// var myObject = {
//     firstname: "Ollie",
//     isAGamer: true
// }
// console.log(JSON.stringify(myObject));


// var newValue = JSON.parse('{"firstname": "Ollie", "isAGamer": true}');

// console.log(newValue);


function food() {
    console.log('pie');
}

food.pastries = 'scones';
console.log(food.pastries);







var newObject = {
    firstname: "Ollie",
    lastname: "Vargas",
    occupation: "programmer",
    address: {
        state: "Texas",
        city: "Katy",
        street: "711 Mountain Meadows Dr."
    }
};

function myArray() {
    console.log(newObject.address.street);
}
myArray();



/*Exercise 1
Write a javascript program to check two numers and return true if one of
the numbers is 100 or if the sum of the two numbers is 100.
*/


const myVar = (a, b) => {
    if (a === 100 || b === 100 || a + b === 100) {
        return true
    }
    else{
        return false
    }
}

console.log(myVar(100, 0));
console.log(myVar(0, 100));
console.log(myVar(20, 80));
console.log(myVar(30, 60));


/*Exercise 2
Write a javascrip program to get the extension of a filename.
*/

const myExtension = (str) => 
    str.slice(str.lastIndexOf('.'))

console.log(myExtension('app.html'));
console.log(myExtension('nan.undefined.py'));

/*Exercise 3
Write a javascript program to replace every character in a given string with 
the character following it in the alphabet.
*/


const charShift = (str) =>
    str.split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

console.log(charShift('cdefg'));


/*Exercise 4
Write a javascript program to get the current date.
Expected output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyy
*/

const getDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}-${months}-${years}`;
}


console.log(getDate());

/*Exercise 5
Write a javascript program to create a new string adding "New!" in front of a given string.
If the given string is "New" already then return the original string.
*/

const newString = (str) => 
    str.indexOf('New!') === 0 ? str: `New! ${str}`;
console.log(newString("New! Items"));



function a() {
    console.log(this);
    this.newvariable = "Yo!"

}

var b = function() {
    console.log(this);
}
a();
console.log(newvariable);
b();

var c = {
    name: 'practice time!',
    log: function() {
        var self = this;

        self.name = 'NewPractice time!'
        console.log(self);

        var setname = function(newname) {
            self.name = newname;
        }
        setname("Updated again!")
        console.log(self);
    }
}
c.log();





var arr = [
    1, 
    false,
    {
        name: 'Tony',
        address: '111 main St.'
    },
    function(name) {
        var greeting = 'Hello  ';
        console.log(greeting + name);
    },
    'hello'

];

console.log(arr);
arr[3](arr[2].address);








// the result will be 3 for all three results. The for loop runs until it hits 3 then refers back to the parent
// context in memory meaning i=3 for all 3 being invoked

function myFunctions() {
    var myVar = [];
    for (var i = 0; i < 3; i++) {
        myVar.push(
            function() {
                console.log(i);
            }
        )
    }
    return myVar;
}
var result = myFunctions();
result[0]();
result[1]();
result[2]();




function myGreeting(language) {
    return function(firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }
        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}
var enGreet = myGreeting('en');
var esGreet = myGreeting('es');

enGreet('Ollie', 'Vargas');
esGreet('Ollie', 'Vargas');
















