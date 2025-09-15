var particleList = {
  listName: "particle",
  category: "grammar",
  levels: [
    {
      level: 0,
      name: "Básicas",
      items: [
        { q: "Tema (se pronuncia 'wa')", a: "は" },
        { q: "Sujeto", a: "が" },
        { q: "Objeto directo (se pronuncia 'o')", a: "を" }
      ]
    },
    {
      level: 1,
      name: "Dirección / Ubicación",
      items: [
        { q: "Lugar de destino, tiempo, objetivo", a: "に" },
        { q: "Dirección (se pronuncia 'e')", a: "へ" },
        { q: "Lugar de acción o medio", a: "で" }
      ]
    },
    {
      level: 2,
      name: "Conjunción",
      items: [
        { q: "Y (enumeración exhaustiva), cita textual", a: "と" },
        { q: "Y (enumeración no exhaustiva)", a: "や" },
        { q: "También, tampoco", a: "も" }
      ]
    },
    {
      level: 3,
      name: "Posesión / Relación",
      items: [
        { q: "Posesión, atributo", a: "の" },
        { q: "Desde (origen)", a: "から" },
        { q: "Hasta (límite)", a: "まで" }
      ]
    },
    {
      level: 4,
      name: "Otros usos comunes",
      items: [
        { q: "Pregunta o 'o' entre opciones", a: "か" },
        { q: "Confirmación, '¿verdad?'", a: "ね" },
        { q: "Énfasis, dar información nueva", a: "よ" }
      ]
    },
    {
      level: 5,
      name: "Ejemplos básicos",
      items: [
          { q: "みず ___ のみます。 (Beber agua - objeto directo)", a: "を" },
          { q: "にほん ___ いきます。 (Ir a Japón - dirección / lugar de destino)", a: "へ" },
          { q: "バス ___ がっこうへいきます。 (Ir en bus - lugar de acción / medio)", a: "で" },
          { q: "これはわたし ___ ほんです。 (Este es mi libro - posesión / atributo)", a: "の" },
          { q: "ともだち ___ えいがをみます。 (Ver una peli con un amigo - enumeración / con)", a: "と" },
          { q: "ろくじ ___ おきます。 (Me levanto a las 6 - momento en el tiempo)", a: "に" },
          { q: "パン ___ たべます。 (Comer pan - objeto directo)", a: "を" },
          { q: "こうえん ___ いきます。 (Ir al parque - dirección / lugar de destino)", a: "へ" },
          { q: "いえ ___ べんきょうします。 (Estudiar en casa - lugar de acción / medio)", a: "で" },
          { q: "ともだち ___ てがみをかきます。 (Escribir una carta con un amigo - enumeración / con)", a: "と" }
      ]
    },
    {
      level: 6,
      name: "Ejemplos intermedios",
      items: [
        { q: "これはわたし ___ ほんです。 (Este es mi libro - posesión)", a: "の" },
        { q: "ろくじ ___ おきます。 (Me levanto a las 6 - momento en el tiempo)", a: "に" },
        { q: "とうきょう ___ きょうとまでいきます。 (Voy desde Tokio hasta Kioto)", a: "から" },
        { q: "にほんごがすこし ___ わかります。 (Entiendo un poco de japonés - énfasis afirmativo)", a: "は" },
        { q: "ビール ___ のみません。 (Tampoco bebo cerveza)", a: "も" }
      ]
    }
  ]
};
