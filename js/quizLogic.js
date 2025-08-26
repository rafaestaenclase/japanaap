let index = 0;
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const correctCircle = document.getElementById("correctCircle");

// Pre-cargar AUDIOS
const correctSound = new Audio("./sounds/small-bell-ring-01a.mp3");
correctSound.volume = 0.5;
correctSound.preload = "auto";
correctSound.load();

const incorrectSound = new Audio("./sounds/button-44.mp3");
incorrectSound.preload = "auto";
incorrectSound.load();

const pillCompleteSound = new Audio("./sounds/bell-ringing-05.mp3");
pillCompleteSound.preload = "auto";
pillCompleteSound.load();

// Desbloquear audios en el primer toque
function unlockAudio() {
  correctSound.play().then(() => correctSound.pause()).catch(()=>{});
  incorrectSound.play().then(() => incorrectSound.pause()).catch(()=>{});
  pillCompleteSound.play().then(() => pillCompleteSound.pause()).catch(()=>{});

  document.removeEventListener('touchstart', unlockAudio);
  document.removeEventListener('click', unlockAudio);
}

document.addEventListener('touchstart', unlockAudio, { once: true });
document.addEventListener('click', unlockAudio, { once: true });

let checkTimeout;
const pageTitleEl = document.getElementById("pageTitle");
const subsectionEl = pageTitleEl.querySelector(".subsection");

function showQuestion() {
  //PARA SABER EN QUE PARTE DEL EXAMEN ESTÁ (HIRAGANA/KATAKANA...)
  const currentItem = filteredQuizList[index];
  questionEl.innerHTML = currentItem.q;
  subsectionEl.textContent = `[${currentItem.origin}: ${currentItem.sublevel}]`;

  questionEl.textContent = filteredQuizList[index].q;
  questionEl.style.color = "";
  answerEl.value = "";

  // ⚡ Solución: resetear el teclado predictivo Para Iphone
  //answerEl.blur();
  //setTimeout(() => answerEl.focus(), 50);
}

function nextQuestion() {
  index++;
  updatePills(index);
  console.log(filteredQuizList.length + " " + index);
  if(index < filteredQuizList.length) {
    showQuestion();
  } else {
    /*
    // Guardar progreso
    let levelCompleted;
    try {
      levelCompleted = JSON.parse(localStorage.getItem("levelCompleted") || "[]");
    } catch {
      levelCompleted = [];
    }

    let playingCategory = quizList["saveCategory"];

    // Buscar si ya existe el nivel en la categoría
    let existing = levelCompleted.find(l => l.category === playingCategory && l.levelId === String(playingLevel));

    if (existing) {
      existing.completedTimes += 1; // Aumenta el contador
    } else {
      levelCompleted.push({
        category: playingCategory,
        levelId: String(playingLevel),
        completedTimes: 1
      });
    }

    // Guardar de nuevo en localStorage
    localStorage.setItem("levelCompleted", JSON.stringify(levelCompleted));
    */
    questionEl.textContent = "¡Completado!";
    answerEl.style.display = "none";
    correctCircle.classList.add("show", "complete");
    correctCircle.addEventListener("click", () => {
      window.location.href = "index.html";
    });
    document.addEventListener("click", () => {
      window.location.href = "index.html";
    });

    hideShowAnswer();
    
  }
}


let isChecking = false; // bloqueo para evitar entradas durante animación
let checkCorrectTime = 2000;
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
    }
  }, checkCorrectTime);
});

// Animación correcto
function showCorrect() {
  questionEl.style.color = "green";
  correctCircle.classList.add("show");

  const sparkleSpan = document.createElement('span');
  correctCircle.appendChild(sparkleSpan);

  correctSound.currentTime = 0;
  correctSound.play();

  resetShowAnswer();  // resetear boton de ayuda

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

// mostrar respuesta help ayuda
const questionDiv = document.getElementById("question");
const showAnswerBtn = document.getElementById("showAnswerBtn");

function showAnswer() {
  if (filteredQuizList[index] == undefined) {
    hideShowAnswer();
  } else {
    showAnswerBtn.textContent = filteredQuizList[index].a;
    if (filteredQuizList[index].r != undefined) {
      showAnswerBtn.textContent += "\n" +  filteredQuizList[index].r;
    }
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

function enableFocusOnInput() {
  answerEl.focus();
}

document.addEventListener('touchstart', enableFocusOnInput, { once: true });
document.addEventListener('click', enableFocusOnInput, { once: true });


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