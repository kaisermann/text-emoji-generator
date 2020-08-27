const bgWheel = document.getElementById("bgColor");
const textWheel = document.getElementById("textColor");
const borderRadius = document.getElementById("borderRadius");
const fontSize = document.getElementById("fontSize");
const padding = document.getElementById("padding");
const { body } = document;
const emojis = document.querySelectorAll(".emoji");

const saveButton = document.getElementById("save-button");
// const imageResult = document.getElementById("image-result");
const imageWrapper = document.querySelector(".emoji-image-wrapper")


bgWheel.addEventListener("input", (e) => {
  body.style.setProperty("--bg", e.target.value);
});

textWheel.addEventListener("input", (e) => {
  body.style.setProperty("--text", e.target.value);
});

fontSize.addEventListener("input", (e) => {
  body.style.setProperty("--fontsize", `${e.target.value}px`);
});

borderRadius.addEventListener("input", (e) => {
  body.style.setProperty("--radius", `${e.target.value}px`);
});

padding.addEventListener("input", (e) => {
  body.style.setProperty("--padding", `${e.target.value}rem`);
});

saveButton.addEventListener("click", (e) => {
  const emoji = document.querySelector(".emoji-wrapper .emoji");
  const computedStyle = document.defaultView.getComputedStyle(emoji, "");

  const paddingLeft = parseInt(computedStyle.paddingLeft)
  const paddingTop = parseInt(computedStyle.paddingTop)
  html2canvas(emoji, {
    backgroundColor: null,
    allowTaint: true,
    scrollX: -paddingTop,
    // scrollY: -paddingLeft,
    removeContainer: true,
    width: emoji.clientWidth,
    height: emoji.clientHeight
  }).then(canvas => {
    imageWrapper.innerHTML = ``;
    
    const title = document.createElement("h2");
    title.textContent = "Your image (right click and save)";
    const imageResult = document.createElement("div");
    imageResult.id = "image-result"

    imageWrapper.appendChild(title);
    imageWrapper.appendChild(imageResult);
    imageResult.appendChild(canvas);
  });
});

emojis.forEach((emoji) => {
  emoji.addEventListener("input", (e) => {
    emojis.forEach((el) => (el.textContent = e.target.textContent));
  });
});

body.style.setProperty("--bg", bgWheel.value);
body.style.setProperty("--text", textWheel.value);
body.style.setProperty("--radius", `${borderRadius.value}px`);
body.style.setProperty("--padding", `${padding.value}rem`);