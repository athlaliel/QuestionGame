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
  },

  {
    question: "モンハンシリーズで「先生」と呼ばれ、初心者ハンターの初めの壁となる大型モンスターは次のどれ？",
    answers: [
      "イャンガルルガ",
      "ドスランポス",
      "アプケロス",
      "イャンクック"
    ],
    ok: "イャンクック"
  },

  {
    question: "角龍ディアブロスは何食性で、主食は何？",
    answers: [
      "肉食で、アプケロスの卵が主食",
      "草食で、サボテンが主食",
      "雑食で、何でも食べる",
      "悪食で、共喰いをする"
    ],
    ok: "草食で、サボテンが主食"
  },

  {
    question: "過去の戦いで、背中に撃龍槍が刺さったまま重油を撒き散らす超大型モンスターの名前は？",
    answers: [
      "ゴグマジオス",
      "ダラ・アマデュラ",
      "シェンガオレン",
      "オストガロア"
    ],
    ok: "ゴグマジオス"
  },

  {
    question: "雷を放つ古龍キリンはネタで何と呼ばれている？",
    answers: [
      "ババケルビ",
      "ドスケルビ",
      "イャンケルビ",
      "ラージャン"
    ],
    ok: "ドスケルビ"
  },

  {
    question: "嵐を纏う古龍の名は次のどれ？",
    answers: [
      "ジエン・モーラン",
      "ヤマツカミ",
      "オオナヅチ",
      "クシャルダオラ"
    ],
    ok: "クシャルダオラ"
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
