const line = document.querySelector(".progress-line");
const button = document.querySelector(".ss-button");
let lineWidth = 0;
let isStoped = false;

button.addEventListener("click", () => {
  if (!isStoped) {
    isStoped = true;
  } else {
    isStoped = false;
  }
});

function progress() {
  const id = setInterval(() => {
    if (!isStoped) {
      lineWidth += 1;
      line.innerHTML = `${lineWidth}%`;
      line.style.width = `${lineWidth}%`;
    }
    if (lineWidth >= 100) {
      clearInterval(id);
    }
  }, 100);
}

progress();
