'use strict';
const pink = document.getElementsByClassName('pink');
const bg = document.getElementById('bg');

pink[0].addEventListener("click", function () {
  bg.style.background = `url("../img/bg.idea-rev.png"), pink`;
  bg.style.backgroundBlendMode = `soft-light`;
});
