// Phase 2: Multiplication (Typed Answer)
importScripts();

function importScripts() {
  const scripts = ["components/mastery.js", "components/questionGen.js", "components/formSubmit.js"];
  scripts.forEach(src => {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
  });
}

const app = document.getElementById("app");
app.innerHTML = `
  <h2>Phase 2: Multiplication (Typed Answer)</h2>
  <div id="question"></div>
  <input id="answerInput" type="number" placeholder="Type answer here" />
  <button onclick="submitAnswer()">Submit</button>
  <div id="status"></div>
`;

let streak = 0;
let currentQ = null;

function newQuestion() {
  currentQ = generateMultiplication();
  document.getElementById("question").innerText = currentQ.text;
  document.getElementById("answerInput").value = "";
  document.getElementById("answerInput").focus();
}

function submitAnswer() {
  const input = parseInt(document.getElementById("answerInput").value);
  if (isNaN(input)) {
    alert("Please enter a number.");
    return;
  }

  if (input === currentQ.answer) {
    streak++;
    document.getElementById("status").innerText = `✅ Correct! Streak: ${streak}`;
    if (streak >= 30) {
      awardStars("Phase 2", 3);
      submitProgress("Phase 2 Mastered", 3);
      loadScript("phases/phase3-distrib1.js");
      return;
    }
  } else {
    streak = 0;
    document.getElementById("status").innerText = `❌ Wrong! The correct answer was ${currentQ.answer}. Streak reset.`;
  }

  newQuestion();
}

newQuestion();
