// Cargar correctSymbols de localStorage (o array vacío si no existe)
let correctSymbolsStoraged = JSON.parse(localStorage.getItem("correctSymbols")) || [];

// Filtrar quizList para eliminar los que ya están en correctSymbols
let filteredQuizList = quizList.filter(item => !correctSymbolsStoraged.includes(item.a));

if (filteredQuizList.length === 0) {
    let correctSymbolsStoraged = JSON.parse(localStorage.getItem("correctSymbols")) || [];

    // Filtramos para eliminar del localStorage solo los símbolos presentes en quizList
    correctSymbolsStoraged = correctSymbolsStoraged.filter(symbol => 
        !quizList.some(item => item.a === symbol)
    );

    localStorage.setItem("correctSymbols", JSON.stringify(correctSymbolsStoraged));
}

// Barajar la lista filtrada
function shuffle(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(filteredQuizList);

// Limitar a máximo 15 símbolos
if (filteredQuizList.length > 15) {
    filteredQuizList = filteredQuizList.slice(0, 15);
}

let index = 0;
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const correctCircle = document.getElementById("correctCircle");

const correctSound = new Audio("https://www.soundjay.com/misc/sounds/small-bell-ring-01a.mp3");
correctSound.volume = 0.5;
const incorrectSound = new Audio("https://www.soundjay.com/buttons/sounds/button-44.mp3");
const pillCompleteSound = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");

let checkTimeout;

function showQuestion() {
  questionEl.textContent = filteredQuizList[index].q;
  questionEl.style.color = "";
  answerEl.value = "";
}

function nextQuestion() {
  index++;
  updatePills(index);

  if(index < filteredQuizList.length) {
    showQuestion();
  } else {
    questionEl.textContent = "¡Completado!";
    answerEl.style.display = "none";
    hideShowAnswer();

    //Guardar progreso
    let prevSymbols = JSON.parse(localStorage.getItem("correctSymbols")) || [];
    let newSymbols = prevSymbols.concat(correctSymbols);
    localStorage.setItem("correctSymbols", JSON.stringify(newSymbols));
  }
}


let isChecking = false; // bloqueo para evitar entradas durante animación

answerEl.addEventListener("input", () => {
  if (isChecking) return; // ignorar entradas mientras está bloqueado

  clearTimeout(checkTimeout); // cancelar temporizador anterior
  const userAnswer = answerEl.value.trim();

  if (userAnswer.length === 0) return;

  if (userAnswer.normalize('NFC') === filteredQuizList[index].a.normalize('NFC')) {
    isChecking = true; // bloquear entradas mientras anima y cambia pregunta
    showCorrect();
    return;
  }

  checkTimeout = setTimeout(() => {
    if (answerEl.value.trim().normalize('NFC') !== filteredQuizList[index].a.normalize('NFC')) {
      showIncorrect();
      answerEl.value = "";
    }
  }, 3000);
});

const correctSymbols = [];

function addCorrectSymbol(symbol) {
  if (!correctSymbols.includes(symbol)) {
    correctSymbols.push(symbol);
  }
}

// Animación correcto
function showCorrect() {
  questionEl.style.color = "green";
  correctCircle.classList.add("show");

  const sparkleSpan = document.createElement('span');
  correctCircle.appendChild(sparkleSpan);

  correctSound.currentTime = 0;
  correctSound.play();

  resetShowAnswer();  // resetear boton de ayuda

  addCorrectSymbol(filteredQuizList[index].a); // Guardar en array

  setTimeout(() => {
    correctCircle.classList.remove("show");
    correctCircle.removeChild(sparkleSpan);
    questionEl.style.color = "";
    nextQuestion();
    isChecking = false;
  }, 800);
}

// Animación incorrecto
function showIncorrect() {
  questionEl.style.color = "red";
  questionEl.style.animation = "shake 0.3s";

  incorrectSound.currentTime = 0;
  incorrectSound.play();

  if (navigator.vibrate) navigator.vibrate(200);
  setTimeout(() => {
    questionEl.style.color = "";
    questionEl.style.animation = "";
  }, 400);
}


showQuestion();

// mostrar respuesta
const questionDiv = document.getElementById("question");
const showAnswerBtn = document.getElementById("showAnswerBtn");

function showAnswer() {
  if (filteredQuizList[index] == undefined) {
    hideShowAnswer();
  } else {
    showAnswerBtn.textContent = filteredQuizList[index].a;
  }
  
}

function resetShowAnswer() {
  showAnswerBtn.textContent = "Ver respuesta";
}

function hideShowAnswer() {
  showAnswerBtn.style.display = "none";
}

showAnswerBtn.addEventListener("click", () => {
  showAnswer();
});




// Mantener foco en el input
function keepFocus() {
  answerEl.focus();
}
answerEl.addEventListener("blur", () => {
  setTimeout(keepFocus, 0);
});
keepFocus();


//PILDORAS
const maxPillsVisible = 5; // máximo píldoras en pantalla
const totalItems = filteredQuizList.length;

// Calculamos el tamaño del bloque que representa cada píldora:
const blockSize = Math.ceil(totalItems / maxPillsVisible);

// Calculamos cuántas píldoras realmente pondremos (<= maxPillsVisible)
const totalPills = Math.ceil(totalItems / blockSize);

const progressPills = document.getElementById("progressPills");

// Limpiamos por si acaso
progressPills.innerHTML = "";

// Crear píldoras con relleno interno
for(let i = 0; i < totalPills; i++) {
  const pill = document.createElement("div");
  pill.classList.add("pill");

  const pillFill = document.createElement("div");
  pillFill.classList.add("pill-fill");

  pill.appendChild(pillFill);
  progressPills.appendChild(pill);
}

// Animación y vibración al completar una píldora
function animatePillCompletion(pill) {
  if (navigator.vibrate) navigator.vibrate(300);

  // Añadir clase vibrar y quitarla tras animación para que se note el movimiento
  pill.classList.add("vibrate");
  setTimeout(() => {
    pill.classList.remove("vibrate");
  }, 600); // duración igual que la animación CSS

  // Sonido al completar píldora
  pillCompleteSound.currentTime = 0;
  pillCompleteSound.play();

  // Crear partículas (estrellitas)
  for(let i=0; i<5; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.position = "absolute";
    star.style.width = "6px";
    star.style.height = "6px";
    star.style.background = "#a5d6a7";
    star.style.borderRadius = "50%";
    star.style.filter = "drop-shadow(0 0 5px #a5d6a7)";
    star.style.pointerEvents = "none";

    // Posición random cerca de la píldora
    const angle = Math.random() * 2 * Math.PI;
    const radius = 20 + Math.random() * 10;
    star.style.left = (pill.offsetLeft + pill.offsetWidth/2 + Math.cos(angle)*radius) + "px";
    star.style.top = (pill.offsetTop + pill.offsetHeight/2 + Math.sin(angle)*radius) + "px";

    document.body.appendChild(star);

    // Animación simple: crecer y desaparecer (1 segundo)
    star.animate([
      {opacity: 1, transform: "scale(1) translateY(0)"},
      {opacity: 0, transform: "scale(0) translateY(-15px)"}
    ], {duration: 1000, easing: "ease-out"});

    // Eliminar después de la animación
    setTimeout(() => star.remove(), 1000);
  }
}

// Función para actualizar el estado visual de las píldoras
function updatePills(currentIndex) {
  const pills = progressPills.children;

  const pillIndex = Math.floor(currentIndex / blockSize);
  const inBlockProgress = (currentIndex % blockSize) / blockSize;

  for(let i = 0; i < pills.length; i++) {
    const pill = pills[i];
    const fill = pill.querySelector(".pill-fill");

    if(i < pillIndex) {
      fill.style.width = "100%";
      pill.classList.add("filled");
    } else if(i === pillIndex) {
      fill.style.width = (inBlockProgress * 100) + "%";
      pill.classList.remove("filled");
    } else {
      fill.style.width = "0%";
      pill.classList.remove("filled");
    }
  }

  // Si la píldora acaba de llenarse (cuando el progreso es 1)
  if ((currentIndex % blockSize) === 0 && currentIndex !== 0) {
    const completedPill = pills[pillIndex - 1];
    if(completedPill) {
      animatePillCompletion(completedPill);
    }
  }
}