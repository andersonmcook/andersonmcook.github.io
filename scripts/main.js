'use strict';

console.log('%c contact me at andersonmcook@gmail.com ', 'background: black; color: white; font-family: monospace; font-size: 1.5em');

// sets soft-light blend mode to background
function softLight (color) {
  bg.style.background = `url("../img/bg.idea-rev.png"), ${color}`;
  bg.style.backgroundBlendMode = `soft-light`;
}

function reverse () {
  bg.style.background = 'url("../img/bg.idea.png")';
}

// event listener for clicker
document.addEventListener("click", clicker);

// grabs color attribute and passes it into softLight()
function clicker (event) {
  const color = event.target.getAttribute('color');
  color !== 'yellow' ? softLight(color) : reverse();
}
