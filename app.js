const homeTextDisplay = document.querySelector('.home-page__text');
const homeText = ['Jim Wright', 'Front End', 'Developer'];
let counter = 0;

function homeTextChange() {
  homeTextDisplay.textContent = homeText[counter];
  counter++;
  if (counter >= homeText.length) {
    counter = 0;
  }
}

setInterval(homeTextChange, 3000);
