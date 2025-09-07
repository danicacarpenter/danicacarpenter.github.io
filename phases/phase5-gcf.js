import { submitMastery } from "../components/mastery.js";

export default function phase5GCF(classCode, studentName, onMastery) {
  let streak = 0;
  const masteryTarget = 20;

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Phase 5: Factoring GCF</h2>
    <p>Factor out the greatest common factor: <span id="question"></span></p>
    <input type="text" id="answer" placeholder="Type your answer (e.g., 3x(x+4))">
    <button id="submit">Submit</button>
    <div id="feedback"></div>
    <p id="streak">Current Streak: 0 | Target: ${masteryTarget}</p>
  `;

  let currentAnswer;

  function generateGCF() {
    // Pick a random GCF
    const gcf = Math.floor(Math.random() * 9) + 2; // 2–10
    const termCount = Math.random() < 0.5 ? 2 : 3;

    const coeffs = Array.from({ length: termCount }, () =>
      (Math.floor(Math.random() * 9) + 1) * gcf
    );

    const terms = coeffs.map((c, i) => `${c}x^${termCount - i}`);
    const expression = terms.join(" + ");

    // Factorized form: gcf(...) with reduced coefficients
    const factoredTerms = coeffs.map((c, i) => `${c / gcf}x^${termCount - i}`);
    const factored = `${gcf}(${factoredTerms.join(" + ")})`;

    return { text: expression, answer: factored.replace(/\s+/g, "") };
  }

  function newQuestion() {
    const q = generateGCF();
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
        document.getElementById("feedback").textContent = "🌟 Phase 5 Mastered! 🌟";
        submitMastery(classCode, studentName, "Phase 5 Mastered");
        if (onMastery) onMastery("phase6");
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
