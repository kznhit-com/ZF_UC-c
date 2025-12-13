function loadScores(){
  document.getElementById("lastScore").innerText =
    localStorage.getItem("lastScore") || "-";

  document.getElementById("bestScore").innerText =
    localStorage.getItem("bestScore") || "-";

  document.getElementById("tries").innerText =
    localStorage.getItem("tries") || 0;
}

function resetScores(){
  localStorage.clear();
  loadScores();
}

loadScores();
