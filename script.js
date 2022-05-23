const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".progress-bar");

activeCircle = 1;

next.addEventListener("click", function () {
  activeCircle++;
  if (activeCircle > circles.length) {
    activeCircle = circles.length;
  }
  update();
});
prev.addEventListener("click", function () {
  activeCircle--;
  if (activeCircle < 1) {
    activeCircle = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < activeCircle) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  progressBar.style.width =
    ((activeCircle - 1) / (circles.length - 1)) * 100 + "%";

  if (activeCircle === circles.length) {
    next.disabled = true;
  } else if (activeCircle === 1) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
