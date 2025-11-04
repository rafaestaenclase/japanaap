var vocabularyBasicList = {
  name: "Vocabulario Básico",
  listName: "vocabularyBasicList",
  category: "vocabulary",
  levels: [
    {
      level: 0,
      name: "Comida",
      items: [
        { q: "arroz", a: ["ごはん", "御飯"], r: "gohan" },
        { q: "pan", a: ["パン"], r: "pan" },
        { q: "leche", a: ["ミルク"], r: "miruku" },
        { q: "agua", a: ["みず", "水"], r: "mizu" },
        { q: "manzana", a: ["りんご", "林檎"], r: "ringo" }
      ]
    },
    {
      level: 1,
      name: "Bebidas",
      items: [
        { q: "té", a: ["おちゃ", "お茶"], r: "ocha" },
        { q: "café", a: ["コーヒー"], r: "koohii" },
        { q: "jugo", a: ["ジュース"], r: "juusu" },
        { q: "cerveza", a: ["ビール"], r: "biiru" },
        { q: "vino", a: ["ワイン"], r: "wain" }
      ]
    },
    {
      level: 2,
      name: "Objetos del hogar",
      items: [
        { q: "silla", a: ["いす", "椅子"], r: "isu" },
        { q: "mesa", a: ["テーブル"], r: "teeburu" },
        { q: "cama", a: ["ベッド"], r: "beddo" },
        { q: "puerta", a: ["ドア"], r: "doa" },
        { q: "ventana", a: ["まど", "窓"], r: "mado" }
      ]
    },
    {
      level: 3,
      name: "Ropa",
      items: [
        { q: "camisa", a: ["Ｔシャツ", "ティーシャツ"], r: "tīshatsu" },
        { q: "pantalón", a: ["ズボン"], r: "zubon" },
        { q: "zapatos", a: ["くつ", "靴"], r: "kutsu" },
        { q: "sombrero", a: ["ぼうし", "帽子"], r: "boushi" },
        { q: "abrigo", a: ["コート"], r: "kooto" }
      ]
    },
    {
      level: 4,
      name: "Colores",
      items: [
        { q: "rojo", a: ["あか", "赤"], r: "aka" },
        { q: "azul", a: ["あお", "青"], r: "ao" },
        { q: "verde", a: ["みどり", "緑"], r: "midori" },
        { q: "amarillo", a: ["きいろ", "黄色"], r: "kiiro" },
        { q: "negro", a: ["くろ", "黒"], r: "kuro" }
      ]
    },
    {
      level: 5,
      name: "Animales",
      items: [
        { q: "gato", a: ["ねこ", "猫"], r: "neko" },
        { q: "perro", a: ["いぬ", "犬"], r: "inu" },
        { q: "pájaro", a: ["とり", "鳥"], r: "tori" },
        { q: "pez", a: ["さかな", "魚"], r: "sakana" },
        { q: "caballo", a: ["うま", "馬"], r: "uma" }
      ]
    },
    {
      level: 6,
      name: "Transporte",
      items: [
        { q: "coche", a: ["くるま", "車"], r: "kuruma" },
        { q: "bicicleta", a: ["じてんしゃ", "自転車"], r: "jitensha" },
        { q: "tren", a: ["でんしゃ", "電車"], r: "densha" },
        { q: "autobús", a: ["バス"], r: "basu" },
        { q: "avión", a: ["ひこうき", "飛行機"], r: "hikouki" }
      ]
    },
    {
      level: 7,
      name: "Verbos básicos",
      items: [
        { q: "comer", a: ["たべる", "食べる"], r: "taberu" },
        { q: "beber", a: ["のむ", "飲む"], r: "nomu" },
        { q: "ir", a: ["いく", "行く"], r: "iku" },
        { q: "venir", a: ["くる", "来る"], r: "kuru" },
        { q: "ver", a: ["みる", "見る"], r: "miru" }
      ]
    },
    {
      level: 8,
      name: "Expresiones comunes",
      items: [
        { q: "hola", a: ["こんにちは"], r: "konnichiwa" },
        { q: "adiós", a: ["さようなら"], r: "sayounara" },
        { q: "gracias", a: ["ありがとう"], r: "arigatou" },
        { q: "perdón", a: ["ごめんなさい"], r: "gomennasai" },
        { q: "sí", a: ["はい"], r: "hai" },
        { q: "no", a: ["いいえ"], r: "iie" }
      ]
    },
    {
      level: 9,
      name: "Interrogativas",
      items: [
        { q: "quién", a: ["だれ"], r: "dare" },
        { q: "qué", a: ["なに", "なん"], r: "nani / nan" },
        { q: "dónde", a: ["どこ"], r: "doko" },
        { q: "cuándo", a: ["いつ"], r: "itsu" },
        { q: "por qué", a: ["なぜ", "どうして"], r: "naze / doushite" },
        { q: "cómo", a: ["どう"], r: "dou" },
        { q: "cuál", a: ["どれ"], r: "dore" },
        { q: "cuánto", a: ["いくら"], r: "ikura" }
      ]
    },
    {
      level: 10,
      name: "Tiempo y días",
      items: [
        { q: "hoy", a: ["きょう", "今日"], r: "kyou" },
        { q: "mañana", a: ["あした", "明日"], r: "ashita" },
        { q: "ayer", a: ["きのう", "昨日"], r: "kinou" },
        { q: "antes de ayer", a: ["おととい"], r: "ototoi" },
        { q: "pasado mañana", a: ["あさって"], r: "asatte" },
        { q: "esta semana", a: ["こんしゅう", "今週"], r: "konshuu" },
        { q: "la semana pasada", a: ["せんしゅう", "先週"], r: "senshuu" },
        { q: "la semana que viene", a: ["らいしゅう", "来週"], r: "raishuu" },
        { q: "ahora", a: ["いま", "今"], r: "ima" },
        { q: "después", a: ["あとで"], r: "atode" },
        { q: "antes", a: ["まえに", "前に"], r: "mae ni" }
      ]
    },
    {
      level: 11,
      name: "Lugares comunes",
      items: [
        { q: "escuela", a: ["がっこう", "学校"], r: "gakkou" },
        { q: "trabajo", a: ["しごと", "仕事"], r: "shigoto" },
        { q: "supermercado", a: ["スーパー"], r: "suupaa" },
        { q: "restaurante", a: ["レストラン"], r: "resutoran" },
        { q: "casa", a: ["いえ", "家"], r: "ie" },
        { q: "baño", a: ["トイレ"], r: "toire" },
        { q: "parque", a: ["こうえん", "公園"], r: "kouen" },
        { q: "estación", a: ["えき", "駅"], r: "eki" }
      ]
    },
    {
      level: 12,
      name: "Personas y familia",
      items: [
        { q: "padre", a: ["ちち", "おとうさん"], r: "chichi / otousan" },
        { q: "madre", a: ["はは", "おかあさん"], r: "haha / okaasan" },
        { q: "hermano mayor", a: ["あに", "おにいさん"], r: "ani / oniisan" },
        { q: "hermana mayor", a: ["あね", "おねえさん"], r: "ane / oneesan" },
        { q: "amigo", a: ["ともだち", "友達"], r: "tomodachi" },
        { q: "niño", a: ["こども", "子供"], r: "kodomo" },
        { q: "hombre", a: ["おとこのひと", "男の人"], r: "otoko no hito" },
        { q: "mujer", a: ["おんなのひと", "女の人"], r: "onna no hito" }
      ]
    },
    {
      level: 13,
      name: "Adjetivos básicos",
      items: [
        { q: "grande", a: ["おおきい", "大きい"], r: "ookii" },
        { q: "pequeño", a: ["ちいさい", "小さい"], r: "chiisai" },
        { q: "caro", a: ["たかい", "高い"], r: "takai" },
        { q: "barato", a: ["やすい", "安い"], r: "yasui" },
        { q: "nuevo", a: ["あたらしい", "新しい"], r: "atarashii" },
        { q: "viejo", a: ["ふるい", "古い"], r: "furui" },
        { q: "bueno", a: ["いい", "良い"], r: "ii" },
        { q: "malo", a: ["わるい", "悪い"], r: "warui" }
      ]
    },
    {
      level: 14,
      name: "Partes del cuerpo",
      items: [
        { q: "cabeza", a: ["あたま", "頭"], r: "atama" },
        { q: "mano", a: ["て", "手"], r: "te" },
        { q: "pie", a: ["あし", "足"], r: "ashi" },
        { q: "ojo", a: ["め", "目"], r: "me" },
        { q: "boca", a: ["くち", "口"], r: "kuchi" },
        { q: "nariz", a: ["はな", "鼻"], r: "hana" },
        { q: "oreja", a: ["みみ", "耳"], r: "mimi" }
      ]
    },
    {
      level: 15,
      name: "Naturaleza y entorno",
      items: [
        { q: "montaña", a: ["やま", "山"], r: "yama" },
        { q: "río", a: ["かわ", "川"], r: "kawa" },
        { q: "mar", a: ["うみ", "海"], r: "umi" },
        { q: "flor", a: ["はな", "花"], r: "hana" },
        { q: "árbol", a: ["き", "木"], r: "ki" },
        { q: "cielo", a: ["そら", "空"], r: "sora" },
        { q: "nieve", a: ["ゆき", "雪"], r: "yuki" }
      ]
    }
  ]
};
