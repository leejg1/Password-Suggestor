function copyText() {
    const textToCopy = document.querySelector(".pword-field");
    textToCopy.select()

    navigator.clipboard.writeText(textToCopy.value);
}

function clearText() {
    document.querySelector(".pword-field").value = "";
}