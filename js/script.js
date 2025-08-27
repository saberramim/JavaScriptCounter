let count = 0;
let countButton;

let start = function () {
  countButton = setInterval(function () {
    count += 1;
    document.getElementById("counter").innerHTML = count;
    document.getElementsByClassName("start")[0].disabled = true;
    document.getElementsByClassName("pause")[0].disabled = false;
  }, 1000);
};

let pause = function () {
  clearInterval(countButton);
  document.getElementsByClassName("start")[0].disabled = false;
    document.getElementsByClassName("pause")[0].disabled = true;

};
