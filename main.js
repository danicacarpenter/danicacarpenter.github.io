import phase1MultiplicationMC from "./phases/phase1-mc.js";
import phase2MultiplicationTyped from "./phases/phase2-typed.js";
import phase3Distribution from "./phases/phase3-distribution.js";
import phase4DoubleDistribution from "./phases/phase4-double.js";
import phase5GCF from "./phases/phase5-gcf.js";
import phase6Trinomials from "./phases/phase6-trinomials.js";
import { getSavedCheckpoint, saveCheckpoint } from "./components/progress.js";

// Map each phase to its function and next step
const phases = [
  { func: phase1MultiplicationMC, name: "Phase 1" },
  { func: phase2MultiplicationTyped, name: "Phase 2" },
  { func: phase3Distribution, name: "Phase 3" },
  { func: phase4DoubleDistribution, name: "Phase 4" },
  { func: phase5GCF, name: "Phase 5" },
  { func: phase6Trinomials, name: "Phase 6" },
];

export default function startGame(classCode, studentName) {
  const savedPhaseIndex = getSavedCheckpoint(classCode, studentName);
  let currentPhaseIndex = savedPhaseIndex ?? 0;

  function loadPhase(index) {
    if (index >= phases.length) {
      document.getElementById("game").innerHTML = `
        <h2>🌟 Mission Accomplished! 🌟</h2>
        <p>Congratulations, ${studentName}! You have completed all phases.</p>
      `;
      return;
    }

    const phase = phases[index];
    phase.func(classCode, studentName, () => {
      // When mastery is reached:
      saveCheckpoint(classCode, studentName, index + 1);
      loadPhase(index + 1);
    });
  }

  loadPhase(currentPhaseIndex);
}
