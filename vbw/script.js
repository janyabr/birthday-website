function startCountdown() {
  const countdown = document.getElementById("countdown");
  const flames = document.querySelectorAll(".pixel-flame");

  let time = 5;
  countdown.textContent = "Blow in " + time + "...";

  const timer = setInterval(() => {
    time--;
    if (time > 0) {
      countdown.textContent = "Blow in " + time + "...";
    } else {
      clearInterval(timer);
      flames.forEach(f => (f.style.display = "none"));
      countdown.textContent = "🎉 WISH GRANTED 🎉";
    }
  }, 1000);
}

function openLetter() {
  document.getElementById("letterModal").style.display = "flex";
}

function closeLetter() {
  document.getElementById("letterModal").style.display = "none";
}

function openVoice() {
  const modal = document.getElementById("voiceModal");
  const audio = document.getElementById("voiceAudio");
  modal.style.display = "flex";
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }
}

function closeVoice() {
  const modal = document.getElementById("voiceModal");
  const audio = document.getElementById("voiceAudio");
  modal.style.display = "none";
  if (audio) audio.pause();
}
