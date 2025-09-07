import { submitMastery } from "../components/mastery.js";

export default function phase6Trinomials(classCode, studentName, onMastery) {
  let streak = 0;
  const masteryTarget = 20;

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Phase 6: Factoring Trinomials</h2>
    <p>Factor the trinomial: <span id="question"></span></p>
    <input type="text" id="answer" placeholder="Type your answer (e.g., (x+3)(x+4))">
    <button id="submit">Submit</button>
    <div id="feedback"></div>
    <p id="streak">Current Streak: 0 | Target: ${masteryTarget}</p>
  `;

  let currentAnswer;

  function generateTrinomial() {
    // Pick two binomial factors first
    const p = Math.floor(Math.random() * 9) + 1;
    const q = Math.floor(Math.random() * 9) + 1;
    const r = Math.floor(Math.random() * 9) + 1;
    const s = Math.floor(Math.random() * 9) + 1;

    // Build trinomial from (px + q)(rx + s)
    const a = p * r;
    const b = p * s + q * r;
    const c = q * s;

    const trinomial = `${a}x^2 + ${b}x + ${c}`;

    const factored = `(${p}x+${q})(${r}x+${s})`;

    return { text: trinomial, answer: factored.replace(/\s+/g, "") };
  }

  function newQuestion() {
    const q = generateTrinomial();
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
        document.getElementById("feedback").textContent = "🌟 Phase 6 Mastered! 🌟";
        submitMastery(classCode, studentName, "Phase 6 Mastered");
        if (onMastery) onMastery(null); // End of the current roadmap
        return;
      }
    } else {
      streak = 0;
      document.getElementById("feedback").textContent =
        `❌ Incorrect. Correct answer was ${currentAnswer}`;
    }
    document.getElementById("streak").textContent =
      `Current Streak: ${streak} | Target: ${masteryTarget}`;
    newQuestion();
  }

  document.getElementById("submit").onclick = checkAnswer;

  newQuestion();
}
