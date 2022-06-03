// These are all the arrays of xp amounts for each difficulty level for levels 1-20
// Where position '0' in the array is level 1 and position '19' is level 20

const Easy = [
  25, 50, 75, 125, 250, 300, 350, 450, 550, 600, 800, 1000, 1100, 1250, 1400,
  1600, 2000, 2100, 2400, 2800,
];
const Medium = [
  50, 100, 150, 250, 500, 600, 750, 900, 1100, 1200, 1600, 2000, 2200, 2500,
  2800, 3200, 3900, 4200, 4900, 5700,
];
const Hard = [
  75, 150, 225, 375, 750, 900, 1100, 1400, 1600, 1900, 2400, 3000, 3400, 3800,
  4300, 4800, 5900, 6300, 7300, 8500,
];
const Deadly = [
  100, 200, 400, 500, 1100, 1400, 1700, 2100, 2400, 2800, 3600, 4500, 5100,
  5700, 6400, 7200, 8800, 9500, 10900, 12700,
];

function calculateEasyDifficulty(nPlayers, level) {
  return nPlayers * Easy[level - 1];
}
function calculateMediumDifficulty(nPlayers, level) {
  return nPlayers * Medium[level - 1];
}
function calculateHardDifficulty(nPlayers, level) {
  return nPlayers * Hard[level - 1];
}
function calculateDeadlyDifficulty(nPlayers, level) {
  return nPlayers * Deadly[level - 1];
}

document
  .querySelector(".calculate-button")
  .addEventListener("click", function () {
    const numPlayers = Number(document.querySelector(".nPlayers").value);
    const playerLevels = Number(document.querySelector(".playerLevels").value);
    let Easy = 0;
    let Medium = 0;
    let Hard = 0;
    let Deadly = 0;
    if (numPlayers !== 0 && playerLevels !== 0) {
      Easy = calculateEasyDifficulty(numPlayers, playerLevels);
      Medium = calculateMediumDifficulty(numPlayers, playerLevels);
      Hard = calculateHardDifficulty(numPlayers, playerLevels);
      Deadly = calculateDeadlyDifficulty(numPlayers, playerLevels);
    }
    document.querySelector(".resultEasy").textContent = `Easy: ${Easy}xp`;
    document.querySelector(".resultMedium").textContent = `Medium: ${Medium}xp`;
    document.querySelector(".resultHard").textContent = `Hard: ${Hard}xp`;
    document.querySelector(".resultDeadly").textContent = `Deadly: ${Deadly}xp`;
  });

// calculating based on monster xp:
// If there are more monsters add a multiplier to their xp's added up
// # OF MONSTERS / MULTIPLIER
// 1 / *1
// 2 / *1.5
// 3-6 / *2
// 7-10 / *2.5
// 11-14 / *3
// 15+ /
