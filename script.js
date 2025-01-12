localStorage.removeItem("userReqest");

// toggleCutomへ名称変更
const toggleCustom = () => 
  document.querySelectorAll("#custom-maxnum, #custom-maxcon, #submit").forEach(el => el.classList.toggle("show"));

// mapでの取り扱いに変更
const submitCustom = () => {
  const [maxNum, maxCon] = ["custom-maxnum", "custom-maxcon"].map(id => document.getElementById(id).value);
  if (maxNum && maxCon) {
    localStorage.setItem("userReqest", JSON.stringify({ maxNum, maxCon }));
    location.href = "./main/custom/custom.html";
  } else {
    alert("数値を入力してください");
  }
};
