const timer = document.querySelector(".timer");
const video = document.querySelector(".video");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
  let seconds = Number(
    prompt("Введіть на скільки секунд хочете поставити таймер")
  );
  if (isNaN(seconds) || seconds <= 0) return;

  let milliseconds = seconds * 1000;
  startBtn.style.display = "none";

  const timerId = setInterval(() => {
    milliseconds--;

    if (milliseconds <= 0) {
      clearInterval(timerId);
      milliseconds = 0;
      timer.innerHTML = "00:00:00:000";
      video.style.display = "block";
      video.volume = 1;
      video.play();
      return;
    }

    const hrs = String(Math.floor(milliseconds / 3600000)).padStart(2, "0");
    const mins = String(Math.floor((milliseconds % 3600000) / 60000)).padStart(
      2,
      "0"
    );
    const secs = String(Math.floor((milliseconds % 60000) / 1000)).padStart(
      2,
      "0"
    );
    const miliSecs = String(milliseconds % 1000).padStart(3, "0");

    timer.innerHTML = `${hrs}:${mins}:${secs}:${miliSecs}`;
  }, 1);
});
