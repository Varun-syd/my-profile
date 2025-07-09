const typingText = document.querySelector(".typing-text");
const message = "Welcome to my webpage!";

let index = 0;
function typeWriter() {
  if (index < message.length) {
    typingText.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 90);
  }
}
window.onload = typeWriter;

function speakMessage() {
  const text = "Hey, thanks for visiting my webpage! You can get to know more from my profile. Here are the links.";
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 1;
  speechSynthesis.speak(speech);

  document.getElementById("links").classList.remove("hidden");
}
