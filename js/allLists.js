// allLists.js

const scriptFiles = [
  "hiraganaList.js",
  "katakanaList.js",
  "vocabularyBasicList.js",
  "particleList.js",
  "verbConjugationList.js",
  "demonstrativesList.js",
  "countingAndTimeList.js"
];

const scriptDir = (() => {
  const currentScript = document.currentScript.src;
  return currentScript.substring(0, currentScript.lastIndexOf("/") + 1);
})();

scriptFiles.forEach(file => {
  document.write(`<script src="${scriptDir + file}"></script>`);
});