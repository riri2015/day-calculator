const button = document.getElementById("calcButton");

button.addEventListener("click", () => {

  const startValue =
    document.getElementById("startDate").value;

  const endValue =
    document.getElementById("endDate").value;

  if (!startValue || !endValue) {
    alert("日付を入力してください");
    return;
  }

  const startDate = new Date(startValue);
  const endDate = new Date(endValue);

  const diff =
    endDate - startDate;

  const days =
    Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("dayResult").textContent =
    days + "日";

});