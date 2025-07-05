
// Basic multiplayer and chat placeholder logic
function createLobby() {
  const username = document.getElementById("username").value;
  document.getElementById("lobby").hidden = true;
  document.getElementById("gameArea").hidden = false;
  document.getElementById("status").innerText = `Game created. Welcome ${username}!`;
}

function joinLobby() {
  const username = document.getElementById("username").value;
  document.getElementById("lobby").hidden = true;
  document.getElementById("gameArea").hidden = false;
  document.getElementById("status").innerText = `${username} joined the game.`;
}

function sendMessage() {
  const msg = document.getElementById("chatInput").value;
  if (msg.trim() !== "") {
    const chatLog = document.getElementById("chatLog");
    const line = document.createElement("p");
    line.textContent = msg;
    chatLog.appendChild(line);
    document.getElementById("chatInput").value = "";
  }
}
