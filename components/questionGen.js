// Question generators
function generateMultiplication() {
  const a = Math.floor(Math.random() * 12) + 1;
  const b = Math.floor(Math.random() * 12) + 1;
  const answer = a * b;

  const choices = [answer];
  while (choices.length < 4) {
    const fake = Math.floor(Math.random() * 144) + 1;
    if (!choices.includes(fake)) choices.push(fake);
  }
  choices.sort(() => Math.random() - 0.5);

  return { text: `${a} × ${b} = ?`, answer, choices };
}

function generateDistrib1() {
  const coeff = Math.floor(Math.random() * 9) + 2; // 2–10
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;

  const text = `${coeff}(${a}x + ${b})`;
  const answer = `${coeff * a}x+${coeff * b}`;

  return { text, answer };
}
// --- Phase 4: Binomial × Binomial ---
function generateDistrib2() {
  // Pick random coefficients (avoid zero to keep it meaningful)
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  const c = Math.floor(Math.random() * 9) + 1;
  const d = Math.floor(Math.random() * 9) + 1;

  // Problem text: (ax + b)(cx + d)
  const text = `(${a}x + ${b})(${c}x + ${d})`;

  // Correct expansion:
  // (ax)(cx) + (ax)(d) + (b)(cx) + (b)(d)
  const coeffX2 = a * c;
  const coeffX = a * d + b * c;
  const constant = b * d;

  // Final simplified answer (standard form: ax²+bx+c)
  const answer = `${coeffX2}x^2+${coeffX}x+${constant}`;

  return { text, answer };
}
