import { generateDistrib2 } from "../components/questionGen.js";
import { submitMastery } from "../components/mastery.js";

export default function phase4Distrib2(classCode, studentName, onMastery) {
  let streak = 0;
  const masteryTarget = 20;

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Phase 4: Double Distribution</h2>
    <p>Expand and simplify: <span id="question"></span></p>
    <input type="text" id="answer" placeholder="Type your answer (e.g., 2x^2+7x+3)">
    <button id="submit">Submit</button>
    <div id="feedback"></div>
    <p id="streak">Current Streak: 0 | Target: ${masteryTarget}</p>
  `;

  let currentAnswer;

  function newQuestion() {
    const q = generateDistrib2();
    currentAnswer = q.answer;
    document.getElementById("question").textContent = q.text;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
  }

  function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.replace(/\s+/g, "");
    if (userAnswer === currentAnswer) {
      streak++;
      document.getElementById("feedback").textContent = "✅ Correct!";
      if (streak >= masteryTarget) {
        document.getElementById("feedback").textContent = "🌟 Phase 4 Mastered! 🌟";
        submitMastery(classCode, studentName, "Phase 4 Mastered");
        if (onMastery) onMastery("phase5");
        return;
      }
    } else {
      streak = 0;
      document.getElementById("feedback").textContent = `❌ Incorrect. The correct answer was ${currentAnswer}`;
    }
    document.getElementById("streak").textContent =
      `Current Streak: ${streak} | Target: ${masteryTarget}`;
    newQuestion();
  }

  document.getElementById("submit").onclick = checkAnswer;

  newQuestion();
}
