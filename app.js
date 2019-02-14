const homeTextDisplay = document.querySelector('.home-page__text');
const homeText = ['Front-End', 'Developer', 'JavaScript', 'React', 'Jim Wright'];
let counter = 0;

function homeTextChange() {
  homeTextDisplay.textContent = homeText[counter];
  counter++;
  if (counter >= homeText.length) {
    counter = 0;
  }
}

setInterval(homeTextChange, 3000);
