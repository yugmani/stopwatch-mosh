const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const durationEl = document.getElementById("duration");

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("Stopwatch has already started.");

    running = true;
    startTime = new Date();
    console.log(startTime);
  };

  this.stop = function () {
    if (!running) throw new Error("Stopwatch hasn't been started.");
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
    durationEl.innerHTML = Math.round(duration);
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
    durationEl.innerHTML = duration;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
// console.log(sw);
// sw.start();
// sw.stop();
// sw.duration;
// sw.reset();

startBtn.addEventListener("click", () => sw.start());

stopBtn.addEventListener("click", () => sw.stop());

resetBtn.addEventListener("click", () => sw.reset());
