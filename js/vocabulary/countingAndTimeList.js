var countingAndTimeList = {
  name: "Números, Contadores y Tiempo",
  listName: "countingAndTimeList",
  category: "vocabulary",
  levels: [
    {
      level: 0,
      name: "Del 0 al 10",
      items: [
        { q: "0", a: ["れい", "ゼロ", "零"], r: "rei / zero" },
        { q: "1", a: ["いち", "一"], r: "ichi" },
        { q: "2", a: ["に", "二"], r: "ni" },
        { q: "3", a: ["さん", "三"], r: "san" },
        { q: "4", a: ["よん", "し", "四"], r: "yon / shi" },
        { q: "5", a: ["ご", "五"], r: "go" },
        { q: "6", a: ["ろく", "六"], r: "roku" },
        { q: "7", a: ["なな", "しち", "七"], r: "nana / shichi" },
        { q: "8", a: ["はち", "八"], r: "hachi" },
        { q: "9", a: ["きゅう", "く", "九"], r: "kyuu / ku" },
        { q: "10", a: ["じゅう", "十"], r: "juu" }
      ]
    },
    {
      level: 1,
      name: "Del 11 al 20",
      items: [
        { q: "11", a: ["じゅういち", "十一"], r: "juu ichi" },
        { q: "12", a: ["じゅうに", "十二"], r: "juu ni" },
        { q: "13", a: ["じゅうさん", "十三"], r: "juu san" },
        { q: "14", a: ["じゅうよん", "じゅうし", "十四"], r: "juu yon / juu shi" },
        { q: "15", a: ["じゅうご", "十五"], r: "juu go" },
        { q: "16", a: ["じゅうろく", "十六"], r: "juu roku" },
        { q: "17", a: ["じゅうなな", "じゅうしち", "十七"], r: "juu nana / juu shichi" },
        { q: "18", a: ["じゅうはち", "十八"], r: "juu hachi" },
        { q: "19", a: ["じゅうきゅう", "じゅうく", "十九"], r: "juu kyuu / juu ku" },
        { q: "20", a: ["にじゅう", "二十"], r: "ni juu" }
      ]
    },
    {
      level: 2,
      name: "Decenas completas",
      items: [
        { q: "30", a: ["さんじゅう", "三十"], r: "san juu" },
        { q: "40", a: ["よんじゅう", "しじゅう", "四十"], r: "yon juu / shi juu" },
        { q: "50", a: ["ごじゅう", "五十"], r: "go juu" },
        { q: "60", a: ["ろくじゅう", "六十"], r: "roku juu" },
        { q: "70", a: ["ななじゅう", "しちじゅう", "七十"], r: "nana juu / shichi juu" },
        { q: "80", a: ["はちじゅう", "八十"], r: "hachi juu" },
        { q: "90", a: ["きゅうじゅう", "九十"], r: "kyuu juu" },
        { q: "100", a: ["ひゃく", "百"], r: "hyaku" },
        { q: "1000", a: ["せん", "千"], r: "sen" },
        { q: "10000", a: ["いちまん", "一万"], r: "ichi man" }
      ]
    },
    {
      level: 3,
      name: "Días de la semana",
      items: [
        { q: "Lunes", a: ["げつようび", "月曜日"], r: "getsuyoubi" },
        { q: "Martes", a: ["かようび", "火曜日"], r: "kayoubi" },
        { q: "Miércoles", a: ["すいようび", "水曜日"], r: "suiyoubi" },
        { q: "Jueves", a: ["もくようび", "木曜日"], r: "mokuyoubi" },
        { q: "Viernes", a: ["きんようび", "金曜日"], r: "kinyoubi" },
        { q: "Sábado", a: ["どようび", "土曜日"], r: "doyoubi" },
        { q: "Domingo", a: ["にちようび", "日曜日"], r: "nichiyoubi" }
      ]
    },
    {
      level: 4,
      name: "Meses del año",
      items: [
        { q: "Enero", a: ["いちがつ", "一月"], r: "ichigatsu" },
        { q: "Febrero", a: ["にがつ", "二月"], r: "nigatsu" },
        { q: "Marzo", a: ["さんがつ", "三月"], r: "sangatsu" },
        { q: "Abril", a: ["しがつ", "四月"], r: "shigatsu" },
        { q: "Mayo", a: ["ごがつ", "五月"], r: "gogatsu" },
        { q: "Junio", a: ["ろくがつ", "六月"], r: "rokugatsu" },
        { q: "Julio", a: ["しちがつ", "七月"], r: "shichigatsu" },
        { q: "Agosto", a: ["はちがつ", "八月"], r: "hachigatsu" },
        { q: "Septiembre", a: ["くがつ", "九月"], r: "kugatsu" },
        { q: "Octubre", a: ["じゅうがつ", "十月"], r: "juugatsu" },
        { q: "Noviembre", a: ["じゅういちがつ", "十一月"], r: "juuichigatsu" },
        { q: "Diciembre", a: ["じゅうにがつ", "十二月"], r: "juunigatsu" }
      ]
    },
    {
      level: 5,
      name: "Estaciones del año",
      items: [
        { q: "Primavera", a: ["はる", "春"], r: "haru" },
        { q: "Verano", a: ["なつ", "夏"], r: "natsu" },
        { q: "Otoño", a: ["あき", "秋"], r: "aki" },
        { q: "Invierno", a: ["ふゆ", "冬"], r: "fuyu" }
      ]
    },
    {
      level: 6,
      name: "Horas del día",
      items: [
        { q: "1 en punto", a: ["いちじ", "一時"], r: "ichi ji" },
        { q: "2 en punto", a: ["にじ", "二時"], r: "ni ji" },
        { q: "3 en punto", a: ["さんじ", "三時"], r: "san ji" },
        { q: "4 en punto", a: ["よじ", "四時"], r: "yo ji" },
        { q: "5 en punto", a: ["ごじ", "五時"], r: "go ji" },
        { q: "6 en punto", a: ["ろくじ", "六時"], r: "roku ji" },
        { q: "7 en punto", a: ["しちじ", "七時"], r: "shichi ji" },
        { q: "8 en punto", a: ["はちじ", "八時"], r: "hachi ji" },
        { q: "9 en punto", a: ["くじ", "九時"], r: "ku ji" },
        { q: "10 en punto", a: ["じゅうじ", "十時"], r: "juu ji" },
        { q: "11 en punto", a: ["じゅういちじ", "十一時"], r: "juuichi ji" },
        { q: "12 en punto", a: ["じゅうにじ", "十二時"], r: "juuni ji" },
        { q: "a.m.", a: ["ごぜん", "午前"], r: "gozen" },
        { q: "p.m.", a: ["ごご", "午後"], r: "gogo" }
      ]
    },
    {
      level: 7,
      name: "Fechas y días del mes",
      items: [
        { q: "1 del mes", a: ["ついたち", "一日"], r: "tsuitachi" },
        { q: "2 del mes", a: ["ふつか", "二日"], r: "futsuka" },
        { q: "3 del mes", a: ["みっか", "三日"], r: "mikka" },
        { q: "4 del mes", a: ["よっか", "四日"], r: "yokka" },
        { q: "5 del mes", a: ["いつか", "五日"], r: "itsuka" },
        { q: "6 del mes", a: ["むいか", "六日"], r: "muika" },
        { q: "7 del mes", a: ["なのか", "七日"], r: "nanoka" },
        { q: "8 del mes", a: ["ようか", "八日"], r: "youka" },
        { q: "9 del mes", a: ["ここのか", "九日"], r: "kokonoka" },
        { q: "10 del mes", a: ["とおか", "十日"], r: "tooka" },
        { q: "14 del mes", a: ["じゅうよっか", "十四日"], r: "juu yokka" },
        { q: "20 del mes", a: ["はつか", "二十日"], r: "hatsuka" },
        { q: "24 del mes", a: ["にじゅうよっか", "二十四日"], r: "nijuuyokka" },
        { q: "30 del mes", a: ["さんじゅうにち", "三十日"], r: "sanjuu nichi" },
        { q: "31 del mes", a: ["さんじゅういちにち", "三十一日"], r: "sanjuu ichi nichi" }
      ]
    }
  ]
};
