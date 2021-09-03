const textarea = document.querySelector("#text");
document.querySelector("#play").addEventListener("click", () => {
  const audio = new SpeechSynthesisUtterance(textarea.value);
  audio.rate = 0.87;
  textarea.disabled = true;
  audio.addEventListener("end", () => {
    textarea.disabled = false;
  });
  speechSynthesis.speak(audio);
});
