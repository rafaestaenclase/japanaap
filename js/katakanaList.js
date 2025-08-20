var katakanaList = {
  category: "katakana",
  saveCategory: "katakana",
  levels: [
    {
      level: 0,
      name: "Básico - Vocales",
      items: [
        { q: "a", a: "ア" },
        { q: "i", a: "イ" },
        { q: "u", a: "ウ" },
        { q: "e", a: "エ" },
        { q: "o", a: "オ" }
      ]
    },
    {
      level: 1,
      name: "Básico - K",
      items: [
        { q: "ka", a: "カ" },
        { q: "ki", a: "キ" },
        { q: "ku", a: "ク" },
        { q: "ke", a: "ケ" },
        { q: "ko", a: "コ" }
      ]
    },
    {
      level: 2,
      name: "Básico - S",
      items: [
        { q: "sa", a: "サ" },
        { q: "shi", a: "シ" },
        { q: "su", a: "ス" },
        { q: "se", a: "セ" },
        { q: "so", a: "ソ" }
      ]
    },
    {
      level: 3,
      name: "Básico - T",
      items: [
        { q: "ta", a: "タ" },
        { q: "chi", a: "チ" },
        { q: "tsu", a: "ツ" },
        { q: "te", a: "テ" },
        { q: "to", a: "ト" }
      ]
    },
    {
      level: 4,
      name: "Básico - N",
      items: [
        { q: "na", a: "ナ" },
        { q: "ni", a: "ニ" },
        { q: "nu", a: "ヌ" },
        { q: "ne", a: "ネ" },
        { q: "no", a: "ノ" }
      ]
    },
    {
      level: 5,
      name: "Básico - H",
      items: [
        { q: "ha", a: "ハ" },
        { q: "hi", a: "ヒ" },
        { q: "fu", a: "フ" },
        { q: "he", a: "ヘ" },
        { q: "ho", a: "ホ" }
      ]
    },
    {
      level: 6,
      name: "Básico - M",
      items: [
        { q: "ma", a: "マ" },
        { q: "mi", a: "ミ" },
        { q: "mu", a: "ム" },
        { q: "me", a: "メ" },
        { q: "mo", a: "モ" }
      ]
    },
    {
      level: 7,
      name: "Básico - Y",
      items: [
        { q: "ya", a: "ヤ" },
        { q: "yu", a: "ユ" },
        { q: "yo", a: "ヨ" }
      ]
    },
    {
      level: 8,
      name: "Básico - R",
      items: [
        { q: "ra", a: "ラ" },
        { q: "ri", a: "リ" },
        { q: "ru", a: "ル" },
        { q: "re", a: "レ" },
        { q: "ro", a: "ロ" }
      ]
    },
    {
      level: 9,
      name: "Básico - W/N",
      items: [
        { q: "wa", a: "ワ" },
        { q: "wo", a: "ヲ" },
        { q: "n", a: "ン" }
      ]
    },
    {
      level: 10,
      name: "Dakuon - G",
      items: [
        { q: "ga", a: "ガ" },
        { q: "gi", a: "ギ" },
        { q: "gu", a: "グ" },
        { q: "ge", a: "ゲ" },
        { q: "go", a: "ゴ" }
      ]
    },
    {
      level: 11,
      name: "Dakuon - Z",
      items: [
        { q: "za", a: "ザ" },
        { q: "ji", a: "ジ" },
        { q: "ji", a: "ヂ", alt: true },
        { q: "zu", a: "ズ" },
        { q: "zu", a: "ヅ", alt: true },
        { q: "ze", a: "ゼ" },
        { q: "zo", a: "ゾ" }
      ]
    },
    {
      level: 12,
      name: "Dakuon - D",
      items: [
        { q: "da", a: "ダ" },
        { q: "de", a: "デ" },
        { q: "do", a: "ド" }
      ]
    },
    {
      level: 13,
      name: "Dakuon - B",
      items: [
        { q: "ba", a: "バ" },
        { q: "bi", a: "ビ" },
        { q: "bu", a: "ブ" },
        { q: "be", a: "ベ" },
        { q: "bo", a: "ボ" }
      ]
    },
    {
      level: 14,
      name: "Handakuten - P",
      items: [
        { q: "pa", a: "パ" },
        { q: "pi", a: "ピ" },
        { q: "pu", a: "プ" },
        { q: "pe", a: "ペ" },
        { q: "po", a: "ポ" }
      ]
    },
    {
      level: 15,
      name: "Yōon - K/S/T/N",
      items: [
        { q: "kya", a: "キャ" },
        { q: "kyu", a: "キュ" },
        { q: "kyo", a: "キョ" },
        { q: "sha", a: "シャ" },
        { q: "shu", a: "シュ" },
        { q: "sho", a: "ショ" },
        { q: "cha", a: "チャ" },
        { q: "chu", a: "チュ" },
        { q: "cho", a: "チョ" },
        { q: "nya", a: "ニャ" },
        { q: "nyu", a: "ニュ" },
        { q: "nyo", a: "ニョ" }
      ]
    },
    {
      level: 16,
      name: "Yōon - H/B/P",
      items: [
        { q: "hya", a: "ヒャ" },
        { q: "hyu", a: "ヒュ" },
        { q: "hyo", a: "ヒョ" },
        { q: "bya", a: "ビャ" },
        { q: "byu", a: "ビュ" },
        { q: "byo", a: "ビョ" },
        { q: "pya", a: "ピャ" },
        { q: "pyu", a: "ピュ" },
        { q: "pyo", a: "ピョ" }
      ]
    },
    {
      level: 17,
      name: "Yōon - M/R/G/J",
      items: [
        { q: "mya", a: "ミャ" },
        { q: "myu", a: "ミュ" },
        { q: "myo", a: "ミョ" },
        { q: "rya", a: "リャ" },
        { q: "ryu", a: "リュ" },
        { q: "ryo", a: "リョ" },
        { q: "gya", a: "ギャ" },
        { q: "gyu", a: "ギュ" },
        { q: "gyo", a: "ギョ" },
        { q: "ja", a: "ジャ" },
        { q: "ja", a: "ヂャ", alt: true },
        { q: "ju", a: "ジュ" },
        { q: "ju", a: "ヂュ", alt: true },
        { q: "jo", a: "ジョ" },
        { q: "jo", a: "ヂョ", alt: true }
      ]
    }
  ]
};
