var hiraganaList = {
  listName: "hiragana",
  category: "write",
  levels: [
    { level: 0, name: "Vocales", items: [
        { q: "a", a: ["あ"] },
        { q: "i", a: ["い"] },
        { q: "u", a: ["う"] },
        { q: "e", a: ["え"] },
        { q: "o", a: ["お"] }
    ] },
    { level: 1, name: "K", items: [
        { q: "ka", a: ["か"] },
        { q: "ki", a: ["き"] },
        { q: "ku", a: ["く"] },
        { q: "ke", a: ["け"] },
        { q: "ko", a: ["こ"] }
    ] },
    { level: 2, name: "S", items: [
        { q: "sa", a: ["さ"] },
        { q: "shi", a: ["し"] },
        { q: "su", a: ["す"] },
        { q: "se", a: ["せ"] },
        { q: "so", a: ["そ"] }
    ] },
    { level: 3, name: "T", items: [
        { q: "ta", a: ["た"] },
        { q: "chi", a: ["ち"] },
        { q: "tsu", a: ["つ"] },
        { q: "te", a: ["て"] },
        { q: "to", a: ["と"] }
    ] },
    { level: 4, name: "N", items: [
        { q: "na", a: ["な"] },
        { q: "ni", a: ["に"] },
        { q: "nu", a: ["ぬ"] },
        { q: "ne", a: ["ね"] },
        { q: "no", a: ["の"] }
    ] },
    { level: 5, name: "H", items: [
        { q: "ha", a: ["は"] },
        { q: "hi", a: ["ひ"] },
        { q: "fu", a: ["ふ"] },
        { q: "he", a: ["へ"] },
        { q: "ho", a: ["ほ"] }
    ] },
    { level: 6, name: "M", items: [
        { q: "ma", a: ["ま"] },
        { q: "mi", a: ["み"] },
        { q: "mu", a: ["む"] },
        { q: "me", a: ["め"] },
        { q: "mo", a: ["も"] }
    ] },
    { level: 7, name: "Y", items: [
        { q: "ya", a: ["や"] },
        { q: "yu", a: ["ゆ"] },
        { q: "yo", a: ["よ"] }
    ] },
    { level: 8, name: "R", items: [
        { q: "ra", a: ["ら"] },
        { q: "ri", a: ["り"] },
        { q: "ru", a: ["る"] },
        { q: "re", a: ["れ"] },
        { q: "ro", a: ["ろ"] }
    ] },
    { level: 9, name: "W/N", items: [
        { q: "wa", a: ["わ"] },
        { q: "wo", a: ["を"] },
        { q: "n", a: ["ん"] }
    ] },
    { level: 10, name: "G", items: [
        { q: "ga", a: ["が"] },
        { q: "gi", a: ["ぎ"] },
        { q: "gu", a: ["ぐ"] },
        { q: "ge", a: ["げ"] },
        { q: "go", a: ["ご"] }
    ] },
    { level: 11, name: "Z", items: [
        { q: "za", a: ["ざ"] },
        { q: "ji", a: ["じ", "ぢ"] },
        { q: "zu", a: ["ず", "づ"] },
        { q: "ze", a: ["ぜ"] },
        { q: "zo", a: ["ぞ"] }
    ] },
    { level: 12, name: "D", items: [
        { q: "da", a: ["だ"] },
        { q: "de", a: ["で"] },
        { q: "do", a: ["ど"] }
    ] },
    { level: 13, name: "B", items: [
        { q: "ba", a: ["ば"] },
        { q: "bi", a: ["び"] },
        { q: "bu", a: ["ぶ"] },
        { q: "be", a: ["べ"] },
        { q: "bo", a: ["ぼ"] }
    ] },
    { level: 14, name: "P", items: [
        { q: "pa", a: ["ぱ"] },
        { q: "pi", a: ["ぴ"] },
        { q: "pu", a: ["ぷ"] },
        { q: "pe", a: ["ぺ"] },
        { q: "po", a: ["ぽ"] }
    ] },
    { level: 15, name: "K/S/T/N", items: [
        { q: "kya", a: ["きゃ"] },
        { q: "kyu", a: ["きゅ"] },
        { q: "kyo", a: ["きょ"] },
        { q: "sha", a: ["しゃ"] },
        { q: "shu", a: ["しゅ"] },
        { q: "sho", a: ["しょ"] },
        { q: "cha", a: ["ちゃ"] },
        { q: "chu", a: ["ちゅ"] },
        { q: "cho", a: ["ちょ"] },
        { q: "nya", a: ["にゃ"] },
        { q: "nyu", a: ["にゅ"] },
        { q: "nyo", a: ["にょ"] }
    ] },
    { level: 16, name: "H/B/P", items: [
        { q: "hya", a: ["ひゃ"] },
        { q: "hyu", a: ["ひゅ"] },
        { q: "hyo", a: ["ひょ"] },
        { q: "bya", a: ["びゃ"] },
        { q: "byu", a: ["びゅ"] },
        { q: "byo", a: ["びょ"] },
        { q: "pya", a: ["ぴゃ"] },
        { q: "pyu", a: ["ぴゅ"] },
        { q: "pyo", a: ["ぴょ"] }
    ] },
    { level: 17, name: "M/R/G/J", items: [
        { q: "mya", a: ["みゃ"] },
        { q: "myu", a: ["みゅ"] },
        { q: "myo", a: ["みょ"] },
        { q: "rya", a: ["りゃ"] },
        { q: "ryu", a: ["りゅ"] },
        { q: "ryo", a: ["りょ"] },
        { q: "gya", a: ["ぎゃ"] },
        { q: "gyu", a: ["ぎゅ"] },
        { q: "gyo", a: ["ぎょ"] },
        { q: "ja", a: ["じゃ", "ぢゃ"] },
        { q: "ju", a: ["じゅ", "ぢゅ"] },
        { q: "jo", a: ["じょ", "ぢょ"] }
    ] }
  ]
};
