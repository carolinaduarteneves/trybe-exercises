function changeToCalmMood() {
  const calmSection = document.getElementById("calm-section");
  const energySection = document.getElementById("energy-section");
  const focusSection = document.getElementById("focus-section");

  calmSection.style.backgroundColor = "#A8DADC";
  energySection.style.backgroundColor = "#A8DADC";
  focusSection.style.backgroundColor = "#A8DADC";
}

function changeToEnergyMood() {
  const calmSection = document.getElementById("calm-section");
  const energySection = document.getElementById("energy-section");
  const focusSection = document.getElementById("focus-section");

  
  calmSection.style.backgroundColor = "#B7E4C7";
  energySection.style.backgroundColor = "#B7E4C7";
  focusSection.style.backgroundColor = "#B7E4C7";
}

function changeToFocusMood() {
  const calmSection = document.getElementById("calm-section");
  const energySection = document.getElementById("energy-section");
  const focusSection = document.getElementById("focus-section");

  
  calmSection.style.backgroundColor = "#CAF0F8";
  energySection.style.backgroundColor = "#CAF0F8";
  focusSection.style.backgroundColor = "#CAF0F8";
}

function reset() {
  const calmSection = document.getElementById("calm-section");
  const energySection = document.getElementById("energy-section");
  const focusSection = document.getElementById("focus-section");

  
  calmSection.style.backgroundColor = "";
  energySection.style.backgroundColor = "";
  focusSection.style.backgroundColor = "";
}