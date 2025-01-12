const userRequest = JSON.parse(localStorage.getItem("userReqest"));
const maxNumber = parseInt(userRequest.maxNum), maxAttempts = parseInt(userRequest.maxCon);
const secret = Math.floor(Math.random() * maxNumber) + 1;
let attempts = 0, remainingAttempts = maxAttempts;

console.log(`正解: ${secret}`);

document.getElementById("maxNumber").textContent = maxNumber;
document.getElementById("remaining_counts").textContent = remainingAttempts;
document.getElementById("finish").style.display = "none";

document.getElementById("data").addEventListener("keydown", (e) => e.key === "Enter" && handleGuess());

function send() {
  const inputNumber = Number(document.getElementById("data").value);
  const information = document.getElementById("information");
  if (!inputNumber) return (information.textContent = "数字を入力してください");

  attempts++;
  remainingAttempts--;
  document.getElementById("questionNumber").textContent = attempts;
  document.getElementById("remaining_counts").textContent = remainingAttempts;

  if (inputNumber === secret || remainingAttempts === 0) {
    finish(inputNumber === secret);
  } else {
    information.textContent = inputNumber < secret ? "値が小さいです" : "値が大きいです";
  }
}

function finish(isWin) {
  document.getElementById("gameMain").style.display = "none";
  const fin = document.getElementById("finish");
  fin.style.display = "block";

  fin.innerHTML = isWin
    ? `<h2>正解! 答えは: ${secret}</h2><h2>あなたの質問回数: ${attempts}</h2>`
    : "<h2>あなたの負け</h2>";
}

localStorage.removeItem("userReqest");

const toggleCustom = () => 
  document.querySelectorAll("#custom-maxnum, #custom-maxcon, #submit").forEach(el => el.classList.toggle("show"));

const submitCustom = () => {
  const [maxNum, maxCon] = ["custom-maxnum", "custom-maxcon"].map(id => document.getElementById(id).value);
  if (maxNum && maxCon) {
    localStorage.setItem("userReqest", JSON.stringify({ maxNum, maxCon }));
    location.href = "./custom.html";
  } else {
    alert("数値を入力してください");
  }
};
