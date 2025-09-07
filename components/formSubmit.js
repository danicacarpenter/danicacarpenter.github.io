// Submits mastery results to Google Form
function submitProgress(phase, stars) {
  const name = localStorage.getItem("studentName");
  const code = localStorage.getItem("classCode");

  const url = `https://docs.google.com/forms/d/e/1FAIpQLScicpC0zHKh9vRyppFmUcKjpsh0f3zBDpJAW1b3QCG55vLbFQ/formResponse?entry.1004564508=${encodeURIComponent(code)}&entry.6202273=${encodeURIComponent(name)}&entry.1268961501=${encodeURIComponent(phase)}&entry.999999=${stars}`;

  fetch(url, { method: "POST", mode: "no-cors" });
}
