'use strict';

// say hello
console.log('%c contact me at andersonmcook@gmail.com ', 'background: black; color: white; font-family: monospace; font-size: 1.5em');

// store options
const options = {
  revbg: 'url("../img/bg.idea-rev.png")',
  blend: 'soft-light',
  initial: 'initial',
  bg: 'url("../img/bg.idea.png")',
  size: 'cover'
};

// sets soft-light blend mode to background
function softLight (color) {
  bg.style.background = `${options.revbg}, ${color}`;
  bg.style.backgroundBlendMode = options.blend;
  bg.style.backgroundSize = options.size;
  container.style.mixBlendMode = options.blend;

  if (color === 'white') {
    container.style.mixBlendMode = options.initial;
  }
}

// reverse
function reverse () {
  container.style.mixBlendMode = options.initial;
  bg.style.background = options.bg;
  bg.style.backgroundSize = options.size;
}

// reset
function reset () {
  bg.style.background = options.bg;
  bg.style.backgroundBlendMode = options.initial;
  bg.style.backgroundSize = options.size;
  container.style.mixBlendMode = options.initial;
}

// event listener for clicker
document.addEventListener("click", clicker);

// grabs color attribute and passes it into softLight()
function clicker (event) {
  const color = event.target.getAttribute('color');
  console.log(event.target.tagName);
  if (color !== null) {
    color !== 'yellow' ? softLight(color) : reverse();
  } else if (event.target.tagName === 'HTML'){
    reset();
  }
}
