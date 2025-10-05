var particleList = {
  listName: "particle",
  category: "grammar",
  levels: [
    {
      level: 0,
      name: "Básicas",
      items: [
        { q: "Tema (se pronuncia 'wa')", a: ["は"], r: "wa" },
        { q: "Sujeto", a: ["が"], r: "ga" },
        { q: "Objeto directo (se pronuncia 'o')", a: ["を"], r: "o" }
      ]
    },
    {
      level: 1,
      name: "Dirección / Ubicación",
      items: [
        { q: "Lugar de destino, tiempo, objetivo", a: ["に"], r: "ni" },
        { q: "Dirección (se pronuncia 'e')", a: ["へ"], r: "e" },
        { q: "Lugar de acción o medio", a: ["で"], r: "de" }
      ]
    },
    {
      level: 2,
      name: "Conjunción",
      items: [
        { q: "Y (enumeración exhaustiva), cita textual", a: ["と"], r: "to" },
        { q: "Y (enumeración no exhaustiva)", a: ["や"], r: "ya" },
        { q: "También, tampoco", a: ["も"], r: "mo" }
      ]
    },
    {
      level: 3,
      name: "Posesión / Relación",
      items: [
        { q: "Posesión, atributo", a: ["の"], r: "no" },
        { q: "Desde (origen)", a: ["から"], r: "kara" },
        { q: "Hasta (límite)", a: ["まで"], r: "made" }
      ]
    },
    {
      level: 4,
      name: "Otros usos comunes",
      items: [
        { q: "Pregunta o 'o' entre opciones", a: ["か"], r: "ka" },
        { q: "Confirmación, '¿verdad?'", a: ["ね"], r: "ne" },
        { q: "Énfasis, dar información nueva", a: ["よ"], r: "yo" }
      ]
    },
    {
      level: 5,
      name: "Ejemplos básicos",
      items: [
        { q: "みず ___ のみます。 (Beber agua - objeto directo)", a: ["を"], r: "o" },
        { q: "にほん ___ いきます。 (Ir a Japón - dirección / lugar de destino)", a: ["へ", "に"], r: "e/ni" },
        { q: "バス ___ がっこうへいきます。 (Ir en bus - lugar de acción / medio)", a: ["で"], r: "de" },
        { q: "これはわたし ___ ほんです。 (Este es mi libro - posesión / atributo)", a: ["の"], r: "no" },
        { q: "ともだち ___ えいがをみます。 (Ver una peli con un amigo - enumeración / con)", a: ["と"], r: "to" },
        { q: "ろくじ ___ おきます。 (Me levanto a las 6 - momento en el tiempo)", a: ["に"], r: "ni" },
        { q: "パン ___ たべます。 (Comer pan - objeto directo)", a: ["を"], r: "o" },
        { q: "こうえん ___ いきます。 (Ir al parque - dirección / lugar de destino)", a: ["へ", "に"], r: "e/ni" },
        { q: "いえ ___ べんきょうします。 (Estudiar en casa - lugar de acción / medio)", a: ["で"], r: "de" },
        { q: "ともだち ___ てがみをかきます。 (Escribir una carta con un amigo - enumeración / con)", a: ["と"], r: "to" }
      ]
    },
    {
      level: 6,
      name: "Ejemplos intermedios",
      items: [
        { q: "これはわたし ___ ほんです。 (Este es mi libro - posesión)", a: ["の"], r: "no" },
        { q: "ろくじ ___ おきます。 (Me levanto a las 6 - momento en el tiempo)", a: ["に"], r: "ni" },
        { q: "とうきょう ___ きょうとまでいきます。 (Voy desde Tokio hasta Kioto)", a: ["から"], r: "kara" },
        { q: "にほんごがすこし ___ わかります。 (Entiendo un poco de japonés - énfasis afirmativo)", a: ["は"], r: "wa" },
        { q: "ビール ___ のみません。 (Tampoco bebo cerveza)", a: ["も"], r: "mo" }
      ]
    }
  ]
};
