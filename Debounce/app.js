let searching = document.getElementById("searching");
let count = document.getElementById("count");
let input = document.getElementById("input");
let num = 0;
let preValVar = "";

function debounce() {
  if (input.value.length > 0) {
    let x = setTimeout(() => {
      if (input.value !== preValVar) {
        console.log(input.value == preValVar);
        num++;
        count.innerHTML = num;
        preValVar = input.value;
      }
    }, 1000);
    clearTimeout(x - 1);
  }
}
