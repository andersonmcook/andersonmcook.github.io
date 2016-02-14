'use strict';
const bg = document.getElementById('bg');
const pink = document.getElementsByClassName('pink');
const green = document.getElementsByClassName('green');
const purple = document.getElementsByClassName('purple');
const orange = document.getElementsByClassName('orange');
// const yellow = document.getElementsByClassName('yellow');
// const white = document.getElementsByClassName('white');
const darkviolet = document.getElementsByClassName('darkviolet');
const lightblue = document.getElementsByClassName('lightblue');

function softLight (color) {
  bg.style.background = `url("../img/bg.idea-rev.png"), ${color}`;
  bg.style.backgroundBlendMode = `soft-light`;
}

pink[0].addEventListener("click", () => {softLight("pink")});
pink[1].addEventListener("click", () => {softLight("pink")});

green[0].addEventListener("click", () => {softLight("green")});
green[1].addEventListener("click", () => {softLight("green")});

purple[0].addEventListener("click", () => {softLight("purple")});
purple[1].addEventListener("click", () => {softLight("purple")});

orange[0].addEventListener("click", () => {softLight("orange")});
orange[1].addEventListener("click", () => {softLight("orange")});

// yellow[0].addEventListener("click", () => {softLight("yellow")});

// white[0].addEventListener("click", () => {softLight("white")});

darkviolet[0].addEventListener("click", () => {softLight("darkviolet")});

lightblue[0].addEventListener("click", () => {softLight("lightblue")});
