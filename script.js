// Global game control
window.onload = () => {
  loadLogin();
};

function loadLogin() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Mission: Factor X</h1>
    <input id="studentName" placeholder="Your Name" />
    <input id="classCode" placeholder="Class Code" />
    <button onclick="startPhase1()">Start Game</button>
  `;
}

function startPhase1() {
  const name = document.getElementById("studentName").value;
  const code = document.getElementById("classCode").value;

  if (!name || !code) {
    alert("Please enter your name and class code.");
    return;
  }

  localStorage.setItem("studentName", name);
  localStorage.setItem("classCode", code);
  localStorage.setItem("phase", "1");

  loadScript("phases/phase1-mc.js");
}

function loadScript(path) {
  const script = document.createElement("script");
  script.src = path;
  document.body.appendChild(script);
}
