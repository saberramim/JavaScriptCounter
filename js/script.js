let count = 0;
let countButton;

let onLoadCounter = function () {
  count = Number(Cookies.get("count"));
  document.getElementById("counter").innerHTML = count;
  let previousState = Cookies.get("state");
  if (previousState === "started") {
    start();
  }
};

let start = function () {
  countButton = setInterval(function () {
    count += 1;
    Cookies.set("count", count);
    Cookies.set("state", "started");
    document.getElementById("counter").innerHTML = count;
    document.getElementsByClassName("start")[0].disabled = true;
    document.getElementsByClassName("pause")[0].disabled = false;
     document.getElementsByClassName("reset")[0].disabled = false;
  }, 1000);
};

let pause = function () {
  Cookies.set("state", "paused");
  clearInterval(countButton);
  document.getElementsByClassName("start")[0].disabled = false;
  document.getElementsByClassName("pause")[0].disabled = true;
};
let reset = function () {
  pause();
  count = 0;
  Cookies.set("count", count);
  document.getElementById("counter").innerHTML = count;
  document.getElementsByClassName("reset")[0].disabled = true;
};
