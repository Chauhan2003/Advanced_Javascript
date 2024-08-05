const displayCount = document.getElementById("countDisplay");
const startBtn = document.getElementById("startButton");
const stopBtn = document.getElementById("stopButton");

let count = 0;
let countInterval;

startBtn.addEventListener("click", function () {
  console.log("clicked start button");
  if (!countInterval) {
    countInterval = setInterval(function () {
      count = count + 1;
      displayCount.innerText = count;
    }, 0);
  }

  console.log(countInterval);
});

stopBtn.addEventListener("click", function () {
  console.log("clicked stop button");
  clearInterval(countInterval);
  countInterval = null;

  console.log(countInterval);
});
