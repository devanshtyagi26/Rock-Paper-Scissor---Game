console.log("Rock Paper Scissor");
console.log("Created By - Devansh Tyagi");
console.log();

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".block");
const displayWinner = document.getElementById("result");
const compBlock = document.getElementById("computerPlay");
const displayWinnerBlock = document.getElementsByClassName("result")[0];
const uScore = document.getElementById("userScore");
const cScore = document.getElementById("compScore");

console.log(displayWinnerBlock);
const randCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const compChoiceIdx = Math.floor(Math.random() * 3);
  return options[compChoiceIdx];
};

const displayComp = (compChoice) => {
  if (compChoice === "rock") {
    compBlock.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 128 128"
                  fill="none"
                >
                  <path
                    d="M76.4266 101.333C76.3984 89.8096 71.8008 78.7675 63.6423 70.629C55.4837 62.4904 44.4304 57.92 32.9066 57.92L51.5733 57.92C53.2097 57.92 54.83 57.5968 56.3411 56.969C57.8523 56.3412 59.2246 55.4211 60.3792 54.2615C61.5338 53.1019 62.4481 51.7257 63.0694 50.2119C63.6908 48.698 64.007 47.0764 64 45.44C64 42.1442 62.6907 38.9835 60.3603 36.653C58.0298 34.3226 54.8691 33.0133 51.5733 33.0133H39.84C31.4005 33.0348 23.3112 36.3894 17.3333 42.3467C11.4151 48.3419 8.09977 56.4291 8.10664 64.8533C8.10664 84.32 15.7333 97.8667 29.44 111.627L33.44 115.04V125.227M61.6533 52.7467C63.9153 51.7817 65.8467 50.1779 67.2109 48.1317C68.575 46.0855 69.3126 43.6858 69.3333 41.2267V20.8533C69.446 19.1136 69.2007 17.3693 68.6124 15.7282C68.0242 14.0872 67.1056 12.5842 65.9133 11.3122C64.7211 10.0403 63.2807 9.02641 61.6811 8.3333C60.0814 7.6402 58.3566 7.28259 56.6133 7.28259C54.87 7.28259 53.1452 7.6402 51.5455 8.3333C49.9459 9.02641 48.5055 10.0403 47.3133 11.3122C46.121 12.5842 45.2024 14.0872 44.6142 15.7282C44.0259 17.3693 43.7806 19.1136 43.8933 20.8533V33.0133M18.1866 41.5467V20.8533C18.0739 19.1136 18.3193 17.3693 18.9075 15.7282C19.4958 14.0871 20.4144 12.5842 21.6066 11.3122C22.7988 10.0403 24.2392 9.0264 25.8389 8.33329C27.4385 7.64019 29.1633 7.28258 30.9066 7.28258C32.65 7.28258 34.3748 7.64019 35.9744 8.33329C37.574 9.0264 39.0145 10.0403 40.2067 11.3122C41.3989 12.5842 42.3175 14.0871 42.9058 15.7282C43.494 17.3693 43.7393 19.1136 43.6266 20.8533V33.0133M94.56 125.227V115.04L98.56 111.627C112.267 97.8667 119.893 84.32 119.893 64.8533V39.2533M107.28 13.2267C114.305 13.2267 120 18.9335 120 25.9733V41.2267C120 48.2665 114.305 53.9733 107.28 53.9733C100.255 53.9733 94.56 48.2665 94.56 41.2267V25.9733C94.56 18.9335 100.255 13.2267 107.28 13.2267ZM81.7866 8.10667C88.8117 8.10667 94.5066 13.8135 94.5066 20.8533V41.1733C94.5066 48.2131 88.8117 53.92 81.7866 53.92C74.7616 53.92 69.0666 48.2131 69.0666 41.1733V20.8533C69.0666 13.8135 74.7616 8.10667 81.7866 8.10667Z"
                    stroke="#020202"
                    stroke-width="8"
                    stroke-miterlimit="10"
                  />
                </svg>`;
  } else if (compChoice === "paper") {
    compBlock.innerHTML = `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="116"
                  height="152"
                  viewBox="0 0 116 152"
                  fill="none"
                >
                  <path
                    d="M50.0968 152C74.8907 152 92.2887 138.664 101.657 112.481L114.054 77.92C117.153 69.1926 114.335 62.001 107.01 59.3478C100.459 56.9739 93.9792 59.7667 90.8798 66.9584L86.3015 78.1297C86.1606 78.4088 85.9493 78.6183 85.6677 78.6183C85.3152 78.6183 85.1745 78.3391 85.1745 77.99V21.9935C85.1745 13.8245 80.0324 8.72765 72.1438 8.72765C69.2557 8.72765 66.6495 9.70507 64.6774 11.5205C63.7617 4.39883 59.1128 0 52.1395 0C45.3069 0 40.5174 4.53825 39.4607 11.3808C37.6999 9.63536 35.1643 8.72765 32.6284 8.72765C25.303 8.72765 20.4428 13.7548 20.4428 21.505V29.2549C18.541 27.3001 15.7235 26.2527 12.6948 26.2527C5.36931 26.2527 0.297842 31.6289 0.297842 39.4488V99.425C0.297842 132.101 20.3021 152 50.0968 152ZM49.7446 142.295C24.8101 142.295 9.59568 126.446 9.59568 98.3078V40.4263C9.59568 37.4937 11.4971 35.3992 14.4556 35.3992C17.3437 35.3992 19.4567 37.4937 19.4567 40.4263V76.1049C19.4567 78.6883 21.5698 80.4337 23.8237 80.4337C26.2187 80.4337 28.4023 78.6883 28.4023 76.1049V22.7615C28.4023 19.7593 30.3041 17.7344 33.1919 17.7344C36.1503 17.7344 38.1931 19.7593 38.1931 22.7615V72.5437C38.1931 75.1274 40.3061 76.8729 42.6304 76.8729C45.0253 76.8729 47.209 75.1274 47.209 72.5437V14.1039C47.209 11.1713 49.1811 9.00679 52.1395 9.00679C54.957 9.00679 56.9997 11.1713 56.9997 14.1039V72.5437C56.9997 74.9877 58.9718 76.8729 61.4374 76.8729C63.832 76.8729 65.9453 74.9877 65.9453 72.5437V22.7615C65.9453 19.7593 67.9877 17.7344 70.8759 17.7344C73.834 17.7344 75.8064 19.7593 75.8064 22.7615V91.4653C75.8064 94.677 77.8491 96.9813 80.8072 96.9813C83.3431 96.9813 85.4561 95.8641 87.0763 92.373L96.6558 71.1475C97.9237 68.1452 100.459 66.6089 103.065 67.5866C105.883 68.7038 106.869 71.3569 105.531 74.9877L93.0635 109.479C84.4701 133.288 69.3966 142.295 49.7446 142.295Z"
                    fill="black"
                  />
                </svg>`;
  } else if (compChoice === "scissor") {
    compBlock.innerHTML = `<img src="Images/Scissor.svg" alt="" />`;
  }
};

const winner = (win) => {
  if (win) {
    console.log("You Win the Game!");
    displayWinner.innerText = "You Win the Game!";
    displayWinnerBlock.style.backgroundColor = "rgba(81, 249, 92, 0.182)";
    userScore++;
    uScore.innerText = userScore;
  } else {
    console.log("You Loose the Game!");
    displayWinner.innerText = "You Loose the Game!";
    displayWinnerBlock.style.backgroundColor = "rgba(249, 81, 81, 0.48)";
    compScore++;
    cScore.innerText = compScore;
  }
};

const game = (userChoice) => {
  const compChoice = randCompChoice();
  console.log("Computer Choice is", compChoice);

  if (userChoice === compChoice) {
    console.log("The Game is Draw!");
    displayWinner.innerText = "The Game is Draw!";
    displayWinnerBlock.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    displayComp(compChoice);
  } else {
    let win = true;
    if (userChoice === "rock") {
      win = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      win = compChoice === "scissor" ? false : true;
    } else {
      win = compChoice === "paper" ? true : false;
    }

    winner(win);
    displayComp(compChoice);
  }
};

choices.forEach((block) => {
  block.addEventListener("click", () => {
    const userChoice = block.getAttribute("id");
    console.log("Your choice is", userChoice);
    game(userChoice);
  });
});

const reset = () => {
  userScore = 0;
  compScore = 0;
  uScore.innerText = userScore;
  cScore.innerText = compScore;
  displayWinner.innerText = "The Game is Draw!";
  displayWinnerBlock.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
};
