const toggleCustom = () => 
  document.querySelectorAll("#custom-maxnum, #custom-maxcon, #submit").forEach(el => el.classList.toggle("show"));

const submitCustom = () => {
  const [maxNum, maxCon] = ["custom-maxnum", "custom-maxcon"].map(id => +document.getElementById(id).value);
  maxNum && maxCon
    ? (localStorage.setItem("userReqest", JSON.stringify({ maxNum, maxCon })), location.href = "./main/custom/custom.html")
    : alert("数値を入力してください");
};

localStorage.removeItem("userReqest");
