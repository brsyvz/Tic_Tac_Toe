(function () {
  let currentTurn = "x";
  const gameField = document.querySelector(".gameField");
  const boxes = document.querySelectorAll(".box");
  let msg = document.getElementById("statusText");
  gameField.addEventListener("click", play);
  document.getElementById("resetBtn").addEventListener("click", reset);

  // nulls will be filled with "box" (class names) then will be changed to "x" or "o" (class names)
  let index = [null, null, null, null, null, null, null, null, null];

  function play(e) {
    const target = e.target;
    let boxesArr = Array.from(boxes);

    if (target.className === "box") {
      if (currentTurn === "x") {
        target.classList.add("x");
        msg.textContent = "Turn: O";
        currentTurn = "o";
      } else if (currentTurn === "o") {
        msg.textContent = "Turn: X";
        target.classList.add("o");
        currentTurn = "x";
      }
    }

    for (let i = 0; i < boxesArr.length; i++) {
      // insert the name of the 2nd class ("x" or "o") to the "index" array depend on index of clicked div box.
      index[i] = boxesArr[i].className.split(" ").pop();
    }
    checkBoard();
  }

  function checkBoard() {
    // possible 8 different winning cases
    const horizontal_1 = index[0] + index[1] + index[2];
    const horizontal_2 = index[3] + index[4] + index[5];
    const horizontal_3 = index[6] + index[7] + index[8];
    const vertical_1 = index[0] + index[3] + index[6];
    const vertical_2 = index[1] + index[4] + index[7];
    const vertical_3 = index[2] + index[5] + index[8];
    const cross_1 = index[0] + index[4] + index[8];
    const cross_2 = index[2] + index[4] + index[6];
    if (
      horizontal_1 === "xxx" ||
      horizontal_2 === "xxx" ||
      (horizontal_3 === "xxx") | (vertical_1 === "xxx") ||
      vertical_2 === "xxx" ||
      vertical_3 === "xxx" ||
      cross_1 === "xxx" ||
      cross_2 === "xxx"
    ) {
      statusText("x_Wins");
      gameField.style.pointerEvents = "none";
    } else if (
      horizontal_1 === "ooo" ||
      horizontal_2 === "ooo" ||
      horizontal_3 === "ooo" ||
      vertical_1 === "ooo" ||
      vertical_2 === "ooo" ||
      vertical_3 === "ooo" ||
      cross_1 === "ooo" ||
      cross_2 === "ooo"
    ) {
      statusText("o_Wins");
      gameField.style.pointerEvents = "none";
    } else if (index.includes("box") === false) {
      statusText("draw");
      gameField.style.pointerEvents = "none";
    }
  }

  function statusText(state) {
    if (state === "x_Wins") {
      msg.textContent = "X wins the game.";
    } else if (state === "o_Wins") {
      msg.textContent = "O wins the game.";
    } else if (state === "draw") {
      msg.textContent = "Draw";
    }
  }

  function reset() {
    index = [null, null, null, null, null, null, null, null, null];
    boxes.forEach((el) => {
      el.classList.remove("x");
      el.classList.remove("o");
    });
    gameField.style.pointerEvents = "initial";
    msg.textContent = "Turn: X";
    currentTurn = "x";
  }
})();
