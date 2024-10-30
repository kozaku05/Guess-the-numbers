let customMaxnum = document.getElementById("custom-maxnum");
let customMove = document.getElementById("custom-move");
let customSubmit = document.getElementById("submit");
function custom() {
  customMaxnum.classList.toggle("show");
  customMove.classList.toggle("show");
  customSubmit.classList.toggle("show");
}
function submit() {
  const maxNumValue = customMaxnum.value;
  const moveValue = customMove.value;
}
