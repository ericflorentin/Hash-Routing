function clipboardCopy(id) {
  let copyText = document.getElementById(id);
  navigator.clipboard.writeText(copyText.innerText);
}

function showTooltip(id) {
  let copyBox = document.getElementById(id);
  let tooltip = document.createElement("p");
  tooltip.classList.add("tooltip");
  tooltip.textContent = "Copied!";
  copyBox.appendChild(tooltip);

  setTimeout(() => {
    copyBox.removeChild(tooltip);
  }, 1500);
}
