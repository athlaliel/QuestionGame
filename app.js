const quiz = [
  {
    question: "モンスタハンターシリーズに登場する黒龍の名前は？",
    answers: [
      "ミラバルカン",
      "ミラボレアス",
      "ミラルーツ",
      "グランミラオス"
    ],
    ok: "ミラボレアス"
  }, 
  
  {
    question: "モンスターハンターシリーズで黒龍との戦闘場所は次の何処ですか？",
    answers: [
      "シュレイド城",
      "決戦場",
      "厄海",
      "天空遺跡"
    ],
    ok: "シュレイド城"
  }, 
  
  {
    question: "モンハンでクエスト中に乱入してくるが多い凶暴龍の名前は？",
    answers: [
      "ベリオロス",
      "ラージャン",
      "アビオルグ",
      "イビルジョー"
    ],
    ok: "イビルジョー"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズ問題
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].ok === e.target.textContent) {
    window.alert("正解");
    score++;
  } else {
    window.alert("不正解");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です。");
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// $button[0].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[1].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener("click", (e) => {
//   clickHandler(e);
// });
