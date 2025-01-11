localStorage.removeItem("userReqest");

const toggleCustom = () => 
  document.querySelectorAll("#custom-maxnum, #custom-move, button").forEach(el => el.classList.toggle("show"));

const submitCustom = () => {
  const [maxNum, moves] = ["custom-maxnum", "custom-move"].map(id => document.getElementById(id).value);
  if (maxNum && moves) {
    localStorage.setItem("userReqest", JSON.stringify({ maxNum, maxMove: moves }));
    location.href = "./main/custom/custom.html";
  } else {
    alert("数値を入力してください");
  }
};
