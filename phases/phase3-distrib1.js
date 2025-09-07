// Phase 3: Distribution (Single Digit × Binomial)

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
  <h2>Phase 3: Distribution (Single Digit × Binomial)</h2>
  <div id="question"></div>
  <input id="answerInput" type="text" placeholder="Type your answer (e.g., 3x+6)" />
  <button onclick="submitAnswer()">Submit</button>
  <div id="status"></div>
`;

let streak = 0;
let currentQ = null;

function newQuestion() {
  currentQ = generateDistrib1(); // single digit × binomial
  document.getElementById("question").innerText = currentQ.text;
  document.getElementById("answerInput").value = "";
  document.getElementById("answerInput").focus();
}

function normalizeAnswer(str) {
  return str.replace(/\s+/g, "").toLowerCase(); // remove spaces, lowercase
}

function submitAnswer() {
  const input = normalizeAnswer(document.getElementById("answerInput").value);

  if (!input) {
    alert("Please type your answer.");
    return;
  }

  if (input === normalizeAnswer(currentQ.answer)) {
    streak++;
    document.getElementById("status").innerText = `✅ Correct! Streak: ${streak}`;
    if (streak >= 20) {
      awardStars("Phase 3", 3);
      submitProgress("Phase 3 Mastered", 3);
      loadScript("phases/phase4-distrib2.js"); // advance to double distribution
      return;
    }
  } else {
    streak = 0;
    document.getElementById("status").innerText =
      `❌ Wrong! The correct answer was ${currentQ.answer}. Streak reset.`;
  }

  newQuestion();
}

newQuestion();
