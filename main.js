// Btn Event Listenerr
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
// HTML Var
let a = document.getElementById("aEl").value;
let b = document.getElementById("bEl").value;
let h = document.getElementById("hEl").value;

// Process
area = ((a - (-b)))/2 * h;

// Output
document.getElementById("output").innerHTML = area.toFixed(0);
}