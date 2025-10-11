import { DateTime} from "./node_modules/luxon/src/luxon.js";

const picker = datepicker ("#birthday-input");
const age = document.getElementById("age");

const calculateBtn = document.getElementById("calculate-button");

calculateBtn.addEventListener("click", () => {
  const bDay = document.getElementById("birthday-input").value;

  if (!bDay) {
    alert("Please enter birth date.");
    return;
  }

  const now = new Date(DateTime.now()).toLocaleDateString().split(".");
  const inputDate = new Date(bDay).toLocaleDateString().split(".");

  let end = DateTime.fromISO(`${now[2]}-${now[1]}-${now[0]}`);
  let start = DateTime.fromISO(`${inputDate[2]}-${inputDate[1]}-${inputDate[0]}`)

  if (start > end) {
    alert("Birth date must be in the past.");
    return;
  }

  let diff = end.diff(start, ["years", "months", "days"]).toObject();

  document.getElementById("result").style.display = "block";
  age.innerText = `${diff.years} years ${diff.months} months ${diff.days} days `;
})