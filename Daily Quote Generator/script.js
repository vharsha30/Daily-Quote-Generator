const quotes = [
  "Believe in yourself!",
  "Keep going, you're doing great.",
  "Every day is a new opportunity.",
  "Stay positive, work hard, dream big.",
  "You are stronger than you think.",
  "Never give up!",
  "Push through the challenges.",
  "Success is no accident.",
  "Discipline is the bridge to success.",
  "Great things take time."
];

function showQuote() {
  const quoteBox = document.getElementById("quote");
  const random = Math.floor(Math.random() * quotes.length);
  quoteBox.classList.remove("fade-in");
  setTimeout(() => {
    quoteBox.textContent = quotes[random];
    quoteBox.classList.add("fade-in");
  }, 100);
}

window.onload = showQuote;
