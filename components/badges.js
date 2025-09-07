// badges.js
export const badges = {
  phase1: { name: "Multiplication Master", icon: "🌟" },
  phase2: { name: "Typed Answer Pro", icon: "⭐️" },
  phase3: { name: "Distributor I", icon: "🚀" },
  phase4: { name: "Distributor II", icon: "🛸" },
  phase5: { name: "GCF Hero", icon: "💎" },
  phase6: { name: "Trinomial Tactician", icon: "🏆" },
};

// Show badge earned
export function showBadge(phaseKey) {
  const badge = badges[phaseKey];
  if (!badge) return;

  const badgeDiv = document.createElement("div");
  badgeDiv.className = "badge-earned";
  badgeDiv.innerHTML = `
    <div class="badge-icon">${badge.icon}</div>
    <div class="badge-name">${badge.name}</div>
  `;

  document.body.appendChild(badgeDiv);

  // Remove after animation
  setTimeout(() => badgeDiv.remove(), 4000);
}
