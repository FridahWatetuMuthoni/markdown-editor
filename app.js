const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let text = editor.value;
  let converter = new showdown.Converter();
  let output = converter.makeHtml(text);
  preview.innerHTML = output;
}
