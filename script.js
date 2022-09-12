// first lets acess each indivudal element from html that i need to manipulate the DOM on click event

const nameEl = document.getElementById("contactName");
const numberEl = document.getElementById("contactNumber");
const pickButton = document.getElementById("contactButton");
const deleteButton = document.getElementById("deleteButton");

// then lets create few different objects for our random contact list
// each object will have a first and last name and the mobile number

let contactOne = {
  firstName: "David",
  lastName: "Broke",
  mobilePhone: "500 600 700",
};

let contactTwo = {
  firstName: "Mat",
  lastName: "Jonson",
  mobilePhone: "600 450 850",
};

let contactThree = {
  firstName: "Gunar",
  lastName: "Stefanson",
  mobilePhone: "321 632 723",
};

let contactFour = {
  firstName: "Jenny",
  lastName: "Lopez",
  mobilePhone: "612 213 130",
};

let contactFive = {
  firstName: "Victoria",
  lastName: "Adams",
  mobilePhone: "721 323 793",
};

let contactSix = {
  firstName: "Mat",
  lastName: "Jonson",
  mobilePhone: "600 450 750",
};

// next we will create an array that stores all our contact list inside

let contactList = [
  contactOne,
  contactTwo,
  contactFour,
  contactFive,
  contactSix,
];

// now we will add event listener that on click calls our function

pickButton.addEventListener("click", function () {
  "use strict"; //   strict mode declared inside a function, has only local scope it helps easier to write "secure" JavaScript code

  // inside of this function we will use a math method Math floor and math random to generate a random number
  // to get a full round number we need to floor it with math floor we are also multiplying it by the lenght number of our array
  let randomNumber = Math.floor(Math.random() * contactList.length);

  // we can always try to console.log and check if it works and the random number on click is printed in the console
  console.log(randomNumber);

  // next we will use this random number to access random contact from our contact list array we can double check if it's work and print it out in console
  console.log(contactList[randomNumber]);

  // if it works we can move further with Template strings we can acess all needed details and wiht innerHTML we can display them in our html element
  nameEl.innerHTML = `Call ${contactList[randomNumber].firstName} ${contactList[randomNumber].lastName}`;

  // we will do exactly the same with the number
  numberEl.innerHTML = contactList[randomNumber].mobilePhone;
});
