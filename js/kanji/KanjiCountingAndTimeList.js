var KanjiCountingAndTimeList = {
  name: "Kanjis — Contadores y Tiempo",
  listName: "KanjiCountingAndTimeList",
  category: "Kanji",
  levels: [
    {
      level: 0,
      name: "日 (día / sol)",
      items: [
        { q: "日本", a: ["にほん", "Japón"], r: "nihon" },
        { q: "今日", a: ["きょう", "hoy"], r: "kyou" },
        { q: "毎日", a: ["まいにち", "todos los días"], r: "mainichi" },
        { q: "日時", a: ["にちじ", "fecha y hora"], r: "nichi ji" },
        { q: "日記", a: ["にっき", "diario (journal)"], r: "nikki" },
        { q: "誕生日", a: ["たんじょうび", "cumpleaños"], r: "tanjoubi" }
      ]
    },
    {
      level: 1,
      name: "月 (luna / mes)",
      items: [
        { q: "月曜日", a: ["げつようび", "lunes"], r: "getsuyoubi" },
        { q: "一月", a: ["いちがつ", "enero / un mes"], r: "ichigatsu" },
        { q: "今月", a: ["こんげつ", "este mes"], r: "kongetsu" },
        { q: "来月", a: ["らいげつ", "el mes que viene"], r: "raigetsu" },
        { q: "毎月", a: ["まいつき/まいげつ", "cada mes"], r: "maitsuki / maigetsu" },
        { q: "満月", a: ["まんげつ", "luna llena"], r: "mangetsu" }
      ]
    },
    {
      level: 2,
      name: "年 (año)",
      items: [
        { q: "今年", a: ["ことし", "este año"], r: "kotoshi" },
        { q: "昨年", a: ["さくねん", "el año pasado"], r: "sakunen" },
        { q: "来年", a: ["らいねん", "el año que viene"], r: "rainen" },
        { q: "年間", a: ["ねんかん", "durante un año"], r: "nenkan" },
        { q: "年末", a: ["ねんまつ", "fin de año"], r: "nenmatsu" },
        { q: "年齢", a: ["ねんれい", "edad"], r: "nenrei" }
      ]
    },
    {
      level: 3,
      name: "時 (hora / tiempo)",
      items: [
        { q: "一時", a: ["いちじ", "1 en punto / un tiempo"], r: "ichiji" },
        { q: "時間", a: ["じかん", "hora / duración"], r: "jikan" },
        { q: "時計", a: ["とけい", "reloj"], r: "tokei" },
        { q: "同時", a: ["どうじ", "al mismo tiempo"], r: "douji" },
        { q: "時速", a: ["じそく", "velocidad por hora"], r: "jisoku" },
        { q: "時代", a: ["じだい", "era / período"], r: "jidai" }
      ]
    },
    {
      level: 4,
      name: "分 (minuto / parte)",
      items: [
        { q: "十分", a: ["じゅっぷん / じゅうふん", "10 minutos"], r: "juppun / juufun" },
        { q: "五分", a: ["ごふん", "5 minutos"], r: "gofun" },
        { q: "分かる", a: ["わかる", "entender / saber"], r: "wakaru" },
        { q: "部分", a: ["ぶぶん", "parte / sección"], r: "bubun" },
        { q: "自分", a: ["じぶん", "uno mismo"], r: "jibun" },
        { q: "気分", a: ["きぶん", "estado de ánimo"], r: "kibun" }
      ]
    },
    {
      level: 5,
      name: "週 (semana)",
      items: [
        { q: "今週", a: ["こんしゅう", "esta semana"], r: "konshuu" },
        { q: "先週", a: ["せんしゅう", "la semana pasada"], r: "senshuu" },
        { q: "来週", a: ["らいしゅう", "la semana que viene"], r: "raishuu" },
        { q: "毎週", a: ["まいしゅう", "cada semana"], r: "maishuu" },
        { q: "週末", a: ["しゅうまつ", "fin de semana"], r: "shuumatsu" },
        { q: "週刊", a: ["しゅうかん", "semanal (publicación)"], r: "shuukan" }
      ]
    },
    {
      level: 6,
      name: "曜 (sufijo día de la semana)",
      items: [
        { q: "月曜日", a: ["げつようび", "lunes"], r: "getsuyoubi" },
        { q: "火曜日", a: ["かようび", "martes"], r: "kayoubi" },
        { q: "水曜日", a: ["すいようび", "miércoles"], r: "suiyoubi" },
        { q: "木曜日", a: ["もくようび", "jueves"], r: "mokuyoubi" },
        { q: "金曜日", a: ["きんようび", "viernes"], r: "kinyoubi" },
        { q: "日曜日", a: ["にちようび", "domingo"], r: "nichiyoubi" }
      ]
    },
    {
      level: 7,
      name: "午 (mediodía / p.m.)",
      items: [
        { q: "午前", a: ["ごぜん", "a.m."], r: "gozen" },
        { q: "午後", a: ["ごご", "p.m."], r: "gogo" },
        { q: "正午", a: ["しょうご", "mediodía"], r: "shougo" }
      ]
    },
    {
      level: 8,
      name: "半 (mitad)",
      items: [
        { q: "半分", a: ["はんぶん", "mitad"], r: "hanbun" },
        { q: "一時半", a: ["いちじはん", "1:30 / una y media"], r: "ichiji han" },
        { q: "半年", a: ["はんとし / はんねん", "medio año"], r: "hantoshi / hannenn" },
        { q: "半額", a: ["はんがく", "medio precio"], r: "hangaku" }
      ]
    },
    {
      level: 9,
      name: "休 (descanso / festivo)",
      items: [
        { q: "休日", a: ["きゅうじつ", "día festivo"], r: "kyuujitsu" },
        { q: "休む", a: ["やすむ", "descansar / ausentarse"], r: "yasumu" },
        { q: "休暇", a: ["きゅうか", "vacaciones / permiso"], r: "kyuuka" },
        { q: "休憩", a: ["きゅうけい", "descanso / pausa"], r: "kyuukei" }
      ]
    },
    {
      level: 10,
      name: "今 / 昨 / 来 (ahora / ayer / venir)",
      items: [
        { q: "今", a: ["いま", "ahora"], r: "ima" },
        { q: "今日", a: ["きょう", "hoy"], r: "kyou" },
        { q: "昨日", a: ["きのう", "ayer"], r: "kinou" },
        { q: "来る", a: ["くる", "venir"], r: "kuru" },
        { q: "来年", a: ["らいねん", "el año que viene"], r: "rainen" },
        { q: "来月", a: ["らいげつ", "el mes que viene"], r: "raigetsu" }
      ]
    },
    {
      level: 11,
      name: "朝 / 昼 / 夜 (momentos del día)",
      items: [
        { q: "朝", a: ["あさ", "mañana (temprano)"], r: "asa" },
        { q: "今朝", a: ["けさ", "esta mañana"], r: "kesa" },
        { q: "昼", a: ["ひる", "mediodía / día (hora)"], r: "hiru" },
        { q: "夕方", a: ["ゆうがた", "tarde (anter. anochecer)"], r: "yuugata" },
        { q: "夜", a: ["よる", "noche"], r: "yoru" },
        { q: "今夜", a: ["こんや", "esta noche"], r: "konya" }
      ]
    },
    {
      level: 12,
      name: "日付 / 日中 / 時期 (formas de expresar tiempo)",
      items: [
        { q: "日付", a: ["ひづけ", "fecha (calendar)"], r: "hiduke" },
        { q: "日中", a: ["にっちゅう", "durante el día"], r: "nicchuu" },
        { q: "時期", a: ["じき", "época / temporada"], r: "jiki" },
        { q: "近日", a: ["きんじつ", "próximamente / en días próximos"], r: "kinjitsu" },
        { q: "最終日", a: ["さいしゅうび", "último día"], r: "saishuubi" }
      ]
    },
    {
      level: 13,
      name: "Contadores: 人 (personas)",
      items: [
        { q: "一人", a: ["ひとり", "una persona"], r: "hitori" },
        { q: "二人", a: ["ふたり", "dos personas"], r: "futari" },
        { q: "何人", a: ["なんにん", "¿cuántas personas?"], r: "nannin" },
        { q: "人数", a: ["にんずう", "número de personas"], r: "ninzuu" }
      ]
    },
    {
      level: 14,
      name: "Contadores: 本 (objetos largos)",
      items: [
        { q: "一本", a: ["いっぽん", "un objeto largo"], r: "ippon" },
        { q: "二本", a: ["にほん", "dos objetos largos"], r: "nihon" },
        { q: "本数", a: ["ほんすう", "número de (objetos)"], r: "honsuu" },
        { q: "本屋", a: ["ほんや", "librería / bookshop"], r: "honya" }
      ]
    },
    {
      level: 15,
      name: "Contadores: 枚 (objetos planos)",
      items: [
        { q: "一枚", a: ["いちまい", "una hoja / una unidad (plano)"], r: "ichimai" },
        { q: "何枚", a: ["なんまい", "¿cuántas hojas?"], r: "nanmai" },
        { q: "枚数", a: ["まいすう", "número de hojas/planos"], r: "maisuu" }
      ]
    }
  ]
};
