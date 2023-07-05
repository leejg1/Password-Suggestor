
function copyText() {
    const copyText = document.querySelector(".pword-field");
    copyText.select()

    navigator.clipboard.writeText(copyText.value);
}