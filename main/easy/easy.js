let information = document.getElementById("information");
let Number = Math.floor(Math.random() * 100) + 1;
console.log("正解：" + Number);
let gameMain = document.getElementById("gameMain");
let questionNumber = document.getElementById("questionNumber");
let question = 0;
let finish = document.getElementById("finish");
finish.style.display = "none";
document.getElementById("data").addEventListener("keydown", function (event) {
  if (event.key === "Enter") send();
});
function send() {
  let data = document.getElementById("data").value;
  if (data) {
    if (data == Number) {
      gameMain.style.display = "none";
      finish.style.display = "block";
      let answer = document.createElement("h2");
      let QuestionNumber = document.createElement("h2");
      QuestionNumber.innerHTML = `あなたの質問回数:${question}`;
      answer.innerHTML = innerHTML = `<h2>正解!答えは:${Number}</h2>`;
      finish.appendChild(answer);
      finish.appendChild(QuestionNumber);
    } else if (data < Number) {
      question += 1;
      questionNumber.innerHTML = question;
      information.innerHTML = "値が小さいです";
    } else {
      question += 1;
      questionNumber.innerHTML = question;
      information.innerHTML = "値が大きいです";
    }
  } else {
    information.innerHTML = "数字を入力してください";
  }
}
