const main = ["welcome", "players", "game", "scores"];
let state = {
  page: "welcome",
  players: [{}, {}],
  rounds: 0,
  currentPlayer: 0,
  playersNum: 2,
};

const hideMains = () =>
  document.querySelectorAll("main").forEach((e) => (e.style.display = "none"));

function render(s) {
  hideMains();
  document.getElementById(s.page).style.display = "flex";
  if (s.page === "players") {
    playersAdd();
  }
}

function startNewGame(s) {
  // return copy of current statte with new pge
  return { ...s, page: "players" }; //...s = shallow copy
}
document.addEventListener("DOMContentLoaded", () => render(state));
document.getElementById("startNewGame").addEventListener("click", () => {
  state = startNewGame(state);
  render(state);
});
function playersAdd() {
  let pageName = document.getElementById(state.page);
  for (let i = 0; i < state.players.length; i++) {
    let input = document.createElement("input");
    input.type = "text";
    let lable = document.createElement("label");
    lable.innerHTML = "player#";

    lable.appendChild(input);
    pageName.appendChild(lable);
  }
}
