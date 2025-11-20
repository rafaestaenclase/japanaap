// allLists.js

const scriptFiles = [
  "write/hiraganaList.js",
  "write/katakanaList.js",


  "vocabulary/vocabularyBasicList.js",
  "vocabulary/countingAndTimeList.js",
  "vocabulary/adjectiveAndAdverbList.js",


  "grammar/particleList.js",
  "grammar/verbConjugationList.js",
  "grammar/demonstrativesList.js",

  "kanji/KanjiCountingAndTimeList.js",
  


];

const scriptDir = (() => {
  const currentScript = document.currentScript.src;
  return currentScript.substring(0, currentScript.lastIndexOf("/") + 1);
})();

scriptFiles.forEach(file => {
  document.write(`<script src="${scriptDir + file}"></script>`);
});