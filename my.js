let checkGood = document.getElementById("goodBox");
let checkCheap = document.getElementById("cheapBox");
let checkfast = document.getElementById("fastBox");

function clickcheckG() {
    console.log(checkGood.checked);
    if (checkGood.checked) {
        if (checkCheap.checked) {
            checkfast.checked = false;
        }
    }
}

function clickcheckC() {
    console.log(checkCheap.checked);
    if (checkCheap.checked) {
        if (checkfast.checked) {
            checkGood.checked = false;
        }
    }
}

function clickcheckf() {
    console.log(checkfast.checked);
    if (checkfast.checked) {
        if (checkGood.checked) {
            checkCheap.checked = false;
        }
    }
}