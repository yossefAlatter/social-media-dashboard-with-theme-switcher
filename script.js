var turn = document.getElementsByClassName("outside")[0];
var myAnime = document.getElementsByClassName("inside")[0];
var x = 4;
turn.onclick = function () {
  if (x % 2 == 0) {
    turn.style.backgroundImage =
      "linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))";
    document.documentElement.style.setProperty(
      "--background",
      "hsl(230, 17%, 14%)"
    );
    document.documentElement.style.setProperty("--text2", "hsl(228, 34%, 66%)");
    document.documentElement.style.setProperty("--text1", "hsl(0, 0%, 100%)");
    document.documentElement.style.setProperty(
      "--cardBackground",
      "hsl(228, 28%, 20%)"
    );
    document.documentElement.style.setProperty(
      "--topBackground",
      "hsl(232, 19%, 15%)"
    );
    myAnime.style.animationName = "myanime1";
  } else {
    turn.style.backgroundImage =
      "linear-gradient(to right,rgb(197, 195, 195),rgb(197, 195, 195))";
    turn.style.backgroundColor = "rgb(197, 195, 195)";
    document.documentElement.style.setProperty(
      "--background",
      " hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty(
      "--text2",
      " hsl(228, 12%, 44%)"
    );
    document.documentElement.style.setProperty(
      "--text1",
      " hsl(230, 17%, 14%)"
    );
    document.documentElement.style.setProperty(
      "--cardBackground",
      "hsl(227, 47%, 96%)"
    );
    document.documentElement.style.setProperty(
      "--topBackground",
      " hsl(225, 100%, 98%)"
    );
    myAnime.style.animationName = "myanime2";
  }
  x += 1;
};

turn.onmouseenter = function () {
  if (x % 2 == 0) {
    turn.style.backgroundImage =
      "linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))";
  } else {
    turn.style.backgroundImage =
      "linear-gradient(to right,rgb(197, 195, 195),rgb(197, 195, 195))";
  }
};
turn.onmouseleave = function () {
  if (x % 2 == 1) {
    turn.style.backgroundImage =
      "linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))";
  } else {
    turn.style.backgroundImage =
      "linear-gradient(to right,rgb(197, 195, 195),rgb(197, 195, 195))";
  }
};
