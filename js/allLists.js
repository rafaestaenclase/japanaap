// allLists.js

const scriptFiles = [
  "hiraganaList.js",
  "katakanaList.js",
  "vocabularyBasicList.js",
  "particleList.js",
  "verbConjugationList.js",
  "demonstrativesList.js",
  "numbersList.js"
];

const scriptDir = (() => {
  const currentScript = document.currentScript.src;
  return currentScript.substring(0, currentScript.lastIndexOf("/") + 1);
})();

scriptFiles.forEach(file => {
  document.write(`<script src="${scriptDir + file}"></script>`);
});


// 👇 Esta parte se ejecuta después de document.write,
// así que las listas ya están cargadas cuando llegue aquí
window.ALL_LISTS = scriptFiles.map(f => {

  const varName = f.replace(".js", "");

  return window[varName] || null;
});
