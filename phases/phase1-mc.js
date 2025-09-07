// Phase 1: Multiple Choice Multiplication
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
app.innerHTML = `<h2>Phase 1: Multiplication (Multiple Choice)</h2><div id="question"></div><div id="choices"></div><div id="status"></div>`;

let streak = 0;

function newQuestion() {
  const q = generateMultiplication();
  document.getElementById("question").innerText = q.text;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  q.choices.forEach(c => {
    const btn = document.createElement("button");
    btn.innerText = c;
    btn.onclick = () => checkAnswer(q.answer, c);
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(correct, chosen) {
  if (correct === chosen) {
    streak++;
    document.getElementById("status").innerText = `✅ Correct! Streak: ${streak}`;
    if (streak >= 50) {
      awardStars("Phase 1", 3);
      submitProgress("Phase 1 Mastered", 3);
      loadScript("phases/phase2-type.js");
      return;
    }
  } else {
    streak = 0;
    document.getElementById("status").innerText = "❌ Wrong! Streak reset.";
  }
  newQuestion();
}

newQuestion();
