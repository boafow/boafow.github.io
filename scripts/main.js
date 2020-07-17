let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/800px-Black_Man_Working_at_his_Laptop_on_the_Couch_Cartoon_Vector.svg.png') {
      myImage.setAttribute ('src','images/images.jpg');
    } else {
      myImage.setAttribute ('src','images/800px-Black_Man_Working_at_his_Laptop_on_the_Couch_Cartoon_Vector.svg.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hyaku Pacento, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hyaku Pacento, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}