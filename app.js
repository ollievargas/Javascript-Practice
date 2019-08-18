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
    brass: "Capt. Obvious"
});

