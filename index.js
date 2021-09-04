const textArea = document.querySelector("#text");
document.querySelector("#play").addEventListener("click", () => {
  if (textArea.value !== "") {
    textArea.disabled = true;
    const audio = new SpeechSynthesisUtterance(textArea.value);
    audio.rate = 0.8;
    audio.addEventListener("end", () => {
      textArea.disabled = false;
    });
    speechSynthesis.speak(audio);
  } else {
    alert("Please enter text for dictation");
  }
});
