// Function to display values
function dis(val) {
    document.getElementById("edu").value += val;
}

// Function to evaluate the expression
function solve() {
    let x = document.getElementById("edu").value;
    let y = eval(x);
    document.getElementById("edu").value = y;
}

// Function to clear the display
function clr() {
    document.getElementById("edu").value = "";
}
