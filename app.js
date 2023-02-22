"use strict";

window.addEventListener("load", start);

let points = 0;
let lives = 3;

function start() {
  console.log("JavaScript kører!");

  // Start animationer
  document
    .querySelector("#missile_container")
    .classList.add("falling-diagonal");
  document.querySelector("#emergency-kit_container").classList.add("falling");

  // Registrer click
  document
    .querySelector("#missile_container")
    .addEventListener("click", clickMissile);
  document
    .querySelector("#emergency-kit_container")
    .addEventListener("click", clickEmergencyKit);
}

function clickMissile(event) {
  console.log("Click missile");
  // Forhindr gentagne clicks
  document
    .querySelector("#missile_container")
    .removeEventListener("click", clickMissile);

  // Stop missil-container
  document.querySelector("#missile_container").classList.add("paused");

  // sæt forsvind-animation på missil
  document.querySelector("#missile_sprite").classList.add("zoom-out");

  // når forsvind-animation er færdig: missileGone
  document
    .querySelector("#missile_container")
    .addEventListener("animationend", missileGone);
  //incrementPoints();

  function missileGone() {
    // fjern event der bringer os herind
    document
      .querySelector("#missile_container")
      .removeEventListener("animationend", missileGone);

    // fjern forsvind-animation
    document.querySelector("#missile_sprite").classList.remove("zoom-out");

    // fjern pause
    document.querySelector("#missile_container").classList.remove("paused");

    // genstart falling-diagonal animation
    document
      .querySelector("#missile_container")
      .classList.remove("falling-diagonal");
    document.querySelector("#missile_container").offsetWidth;

    document
      .querySelector("#missile_container")
      .classList.add("falling-diagonal");

    // gør det muligt at klikke på missil igen
    document
      .querySelector("#missile_container")
      .addEventListener("click", clickMissile);
  }

 // function clickEmergencyKit(event) {
 //   console.log("Click emergencyKit");
    // Forhindr gentagne clicks
 //   document
 //     .querySelector("#emergency-kit_container")
 //     .removeEventListener("click", clickEmergencyKit);

    // Stop coin container
    //  document.querySelector("#emergency-kit_container").classList.add("paused");

    // sæt forsvind-animation på coin
    //  document.querySelector("#emergency-kit_sprite").classList.add("zoom-out");

    // når forsvind-animation er færdig: coinGone
    //  document
    //    .querySelector("#emergecy-kit_container")
    //    .addEventListener("animationend", emergency-kitGone);

    //  decrementLives();
  }

  //function start() {
  //console.log("start");
  //document.querySelector("#missile_container").classList.add("falling-diagonal");
  //document.querySelector("#missile_sprite").addEventListener("click", zoom_out);

  //function zoom_out() {
  //console.log("zoom_out");
  //document.querySelector("#missile_container").classList.add("paused");
  //document.querySelector("#missile_sprite").classList.add("zoom-out");

  //function start() {
  //console.log("start");
  //document.querySelector("#missile_container").classList.add("falling-diagonal");
  //document.querySelector("#missile_container").addEventListener("click", clickMissile);

  //function clickMissile() {
  //document.querySelector("#missile_container").classList.add("paused");
  //document.querySelector("#missile_sprite").classList.add("zoom-out");

  // Start animationer
  //{
  //document.querySelector("#missile_container").classList.add("falling-diagonal");
  //document.querySelector("#emergency-kit_container").classList.add("falling");

  // Registrer click
  //document.querySelector("#emergency-kit_container").addEventListener("click", clickEmergencyKit);
  //document.querySelector("#missile_container").addEventListener("click", clickMissile);
  //}

  //function clickMissile() {
  //console.log("clickMissile");
  //document.querySelector("#missile_container").add("zoom-out");

  //function clickEmergencyKit() {
  //console.log("clickEmergencyKit");

  // Forhindr gentagne clicks
  //document.querySelector("#missile_container").removeEventListener("click", clickMissile);

  // Stop coin container
  //function clickMissile()
  //document.querySelector("#missile_container").classList.add("paused");
  //document.querySelector("#missile_sprite").classList.add("zoom-out");
  // sæt forsvind-animation på coin

  // når forsvind-animation er færdig: coinGone
  //document
  // .querySelector("#missile_container").addEventListener("animationend", coinGone);
  //incrementPoints();

  //}
  // Stop coin container
  //  document.querySelector("#coin1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  //document.querySelector("#coin1_sprite").classList.add("zoom_out");
  //

