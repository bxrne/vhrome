const scrollAmount = 100;

function openHelpPopup() {
  if (document.getElementById("vim-help-modal")) return;

  const iframe = document.createElement("iframe");
  iframe.src = chrome.runtime.getURL("resources/help.html");
  iframe.id = "vim-help-modal";
  iframe.style.cssText = `
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 300px;
    border: none;
    z-index: 999999;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
  `;
  document.body.appendChild(iframe);
}

document.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
  if (e.ctrlKey || e.metaKey || e.altKey) return;

  switch (e.key) {
    case "h":
      window.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      break;
    case "l":
      window.scrollBy({ left: scrollAmount, behavior: "smooth" });
      break;
    case "j":
      window.scrollBy({ top: scrollAmount, behavior: "smooth" });
      break;
    case "k":
      window.scrollBy({ top: -scrollAmount, behavior: "smooth" });
      break;
    case "?":
      e.preventDefault();
      openHelpPopup();
      break;
    case ":":
      document.addEventListener(
        "keypress",
        function handler(ev) {
          if (ev.key === "Enter") {
            const val = buffer.trim().toLowerCase();
            if (val === ":help") openHelpPopup();
            buffer = "";
            document.removeEventListener("keypress", handler);
          } else {
            buffer += ev.key;
          }
        },
        { once: true },
      );
      var buffer = ":";
      break;
  }
});
