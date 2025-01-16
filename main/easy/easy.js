const info = document.getElementById("information");
const gameMain = document.getElementById("gameMain");
const questionNum = document.getElementById("questionNumber");
const finish = document.getElementById("finish");
let secret = Math.floor(Math.random() * 100) + 1, attempts = 0;

console.log("正解：" + secret);
finish.style.display = "none";

document.getElementById("data").addEventListener("keydown", (e) => e.key === "Enter" && send());

const send = () => {
  const input = Number(document.getElementById("data").value);
  if (!input) return (info.textContent = "数字を入力してください");

  attempts++;
  questionNum.textContent = attempts;

  if (input === secret) {
    gameMain.style.display = "none";
    finish.style.display = "block";
    finish.innerHTML = `<h2>正解! 答えは: ${secret}</h2><h2>あなたの質問回数: ${attempts}</h2>`;
  } else {
    info.textContent = input < secret ? "値が小さいです" : "値が大きいです";
  }
};

const toggleCustom = () =>
  document.querySelectorAll("#custom-maxnum, #custom-maxcon, #submit")
    .forEach(el => el.classList.toggle("show"));

const submitCustom = () => {
  const [maxNum, maxCon] = ["custom-maxnum", "custom-maxcon"].map(id => +document.getElementById(id).value);
  return maxNum && maxCon
    ? (localStorage.setItem("userRequest", JSON.stringify({ maxNum, maxCon })), location.href = "../custom/custom.html")
    : alert("数値を入力してください");
};

localStorage.removeItem("userRequest");
