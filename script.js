// let speech = new SpeechSynthesisUtterance();

// let voices = [];

// let voiceSelect = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = () => {
//   voices = window.speechSynthesis.getVoices;
//   speech.voice = voices[0];

//   voices.forEach(
//     (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
//   );
// };

// document.querySelector("button").addEventListener("click", () => {
//   speech.text = document.querySelector("textarea").value;
//   window.speechSynthesis.speak(speech);

//   voiceSelect.addEventListener("change", () => {
//     speech.voice = voices[voiceSelect.value];
//   });
// });

let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

// Populate the voices when they change
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0]; // Set default voice

  // Populate the dropdown with voices
  voiceSelect.innerHTML = ""; // Clear existing options
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

// Event listener for voice selection
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

// Speak the text when the button is clicked
document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
