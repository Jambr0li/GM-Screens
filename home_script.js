// CODE FOR CONDITIONS MODULE

let condition = "blinded";
document.getElementById(condition + "-info").style.display = "block";

function changeCondition(condition_name) {
  document.getElementById(condition + "-info").style.display = "none";
  condition = condition_name;
  document.getElementById(condition + "-info").style.display = "block";
}

let tableInfo = "size-categories";
document.getElementById(tableInfo + "-info").style.display = "block";

function changeTableInfo(table_info) {
  document.getElementById(tableInfo + "-info").style.display = "none";
  tableInfo = table_info;
  document.getElementById(tableInfo + "-info").style.display = "block";
}

document
  .querySelector("#size-categories")
  .addEventListener("click", function () {
    changeTableInfo("size-categories");
  });

document.querySelector("#travel-speeds").addEventListener("click", function () {
  changeTableInfo("travel-speeds");
});

document.querySelector("#blinded").addEventListener("click", function () {
  changeCondition("blinded");
});

document.querySelector("#charmed").addEventListener("click", function () {
  changeCondition("charmed");
});

document.querySelector("#deafened").addEventListener("click", function () {
  changeCondition("deafened");
});

document.querySelector("#frightened").addEventListener("click", function () {
  changeCondition("frightened");
});

document.querySelector("#grappled").addEventListener("click", function () {
  changeCondition("grappled");
});

document.querySelector("#incapacitated").addEventListener("click", function () {
  changeCondition("incapacitated");
});

document.querySelector("#invisible").addEventListener("click", function () {
  changeCondition("invisible");
});

document.querySelector("#paralyzed").addEventListener("click", function () {
  changeCondition("paralyzed");
});

document.querySelector("#petrified").addEventListener("click", function () {
  changeCondition("petrified");
});

document.querySelector("#poisoned").addEventListener("click", function () {
  changeCondition("poisoned");
});

document.querySelector("#prone").addEventListener("click", function () {
  changeCondition("prone");
});

document.querySelector("#restrained").addEventListener("click", function () {
  changeCondition("restrained");
});

document.querySelector("#stunned").addEventListener("click", function () {
  changeCondition("stunned");
});

document.querySelector("#unconscious").addEventListener("click", function () {
  changeCondition("unconscious");
});

document.querySelector("#exhaustion").addEventListener("click", function () {
  changeCondition("exhaustion");
});
