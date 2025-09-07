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
