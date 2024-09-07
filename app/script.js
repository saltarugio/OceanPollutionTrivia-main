// Seleciona os botões do inicio
const start_box = document.querySelector(".start_box");
const start_btn = start_box.querySelector(".start_btn");

// Seleciona os elementos relevantes do DOM
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const result_box = document.querySelector(".result_box");
const save_btn = result_box.querySelector(".buttons .save");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
const user_box = document.querySelector(".user_box");
const keep_btn = user_box.querySelector(".keep");
const quit_btn = user_box.querySelector(".quit");
const ranking_btn = user_box.querySelector(".ranking_btn");
const userInput = document.getElementById("user");
const emailInput = document.getElementById("email");
const ranking_box = document.querySelector(".ranking_box");
const back_btn = document.querySelector(".back .back_btn");

const round = shuffle(questions).slice(0, 10);

// Variáveis dos icones
let tickIconTag = '<div class="icon tick"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div>';
let crossIconTag = '<div class="icon cross"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></div>';


// Variáveis de controle do tempo, perguntas, pontuação, etc.
let timeValue = 30;
let que_numb = 1;
let que_count = 0;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 1;
let limit = 10;
let user = userInput.value;
let email = emailInput.value;
let save = false;

// Funções para mudar a cor do jogo baseado no modo de cores do windows
function setLight() {
  document.documentElement.style.setProperty('--primary', '#007bff');
  document.documentElement.style.setProperty('--background', '#fff');
  document.documentElement.style.setProperty('--color', '#000');
  document.documentElement.style.setProperty('--border', '#d3d3d3');
  document.documentElement.style.setProperty('--timer-color', '#004085');
  document.documentElement.style.setProperty('--timer-border', '#b8daff');
  document.documentElement.style.setProperty('--timer-background', '#cce5ff');
  document.documentElement.style.setProperty('--timer_sec', '#343a40');
  document.documentElement.style.setProperty('--hover', '#0263ca');
  document.documentElement.style.setProperty('--correct-color', '#155724');
  document.documentElement.style.setProperty('--correct-background', '#d4edda');
  document.documentElement.style.setProperty('--correct-border', '#c3e6cb');
  document.documentElement.style.setProperty('--incorrect-color', '#721c24');
  document.documentElement.style.setProperty('--incorrect-background', '#f8d7da');
  document.documentElement.style.setProperty('--incorrect-border', '#f5c6cb');
  document.documentElement.style.setProperty('--icon-correct', '#23903c');
  document.documentElement.style.setProperty('--icon-correct-background', '#d4edda');
  document.documentElement.style.setProperty('--icon-incorrect', '#a42834');
  document.documentElement.style.setProperty('--icon-incorrect-background', '#f8d7da');
  document.documentElement.style.setProperty('--option-background', '#f0f8ff');
  document.documentElement.style.setProperty('--option-border', '#84c5fe');
}

function setDark() {
  document.documentElement.style.setProperty('--primary', '#112b47');
  document.documentElement.style.setProperty('--background', '#333333');
  document.documentElement.style.setProperty('--color', '#fff');
  document.documentElement.style.setProperty('--border', '#a9a9a9');
  document.documentElement.style.setProperty('--timer-color', '#004085');
  document.documentElement.style.setProperty('--timer-border', '#b8daff');
  document.documentElement.style.setProperty('--timer-background', '#cce5ff');
  document.documentElement.style.setProperty('--timer_sec', '#343a40');
  document.documentElement.style.setProperty('--hover', '#0263ca');
  document.documentElement.style.setProperty('--correct-color', '#155724');
  document.documentElement.style.setProperty('--correct-background', '#d4edda');
  document.documentElement.style.setProperty('--correct-border', '#c3e6cb');
  document.documentElement.style.setProperty('--incorrect-color', '#721c24');
  document.documentElement.style.setProperty('--incorrect-background', '#f8d7da');
  document.documentElement.style.setProperty('--incorrect-border', '#f5c6cb');
  document.documentElement.style.setProperty('--icon-correct', '#23903c');
  document.documentElement.style.setProperty('--icon-correct-background', '#d4edda');
  document.documentElement.style.setProperty('--icon-incorrect', '#a42834');
  document.documentElement.style.setProperty('--icon-incorrect-background', '#f8d7da');
  document.documentElement.style.setProperty('--option-background', '#6e6e6e86');
  document.documentElement.style.setProperty('--option-border', '#6e6e6e86');
}

// match.addEventListener('change', (e) => {
//     e.matches ? setDark() : setLight();
// });

var match = window.matchMedia('(prefers-color-scheme: dark)');
if (match.matches === true) {
  setDark();
} else {
  setLight();
}

// Evento de clique no botão de iniciar
start_btn.onclick = () => {
  // start_box.style.display = "none";
  info_box.classList.add("activeInfo");
  start_box.classList.remove("activeStart");
}

ranking_btn.onclick = () => {
  // user_box.style.display = "none";
  user_box.classList.remove("activeUser");
  ranking_box.classList.add("activeRanking");
  ranking();
}

// Evento de clique no botão de sair
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  start_box.classList.add("activeStart");
}

quit_btn.onclick = () => {
  result_box.classList.add("activeResult");
  user_box.classList.remove("activeUser");
}

back_btn.onclick = () => {
  ranking_box.classList.remove("activeRanking");
  user_box.classList.add("activeUser");
}

// Evento de clique no botão de continuar
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  // loadQuestion();
  showQuestions(0)
  queCounter(1);
  startTimer(30);
  startTimerLine(1);
}

// Evento de clique no botão de reiniciar
restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  timeValue = 30;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 1;
  save = false;
  // loadQuestion();
  queCounter(que_numb);
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(timeValue);
  startTimerLine(widthValue);
  timeText.textContent = "Time";
  next_btn.classList.remove("show");

  // Limpa as classes das opções para redefinir seu estado
  const optionElements = option_list.querySelectorAll(".option");
  optionElements.forEach(optionElement => {
    optionElement.classList.remove("correct", "incorrect", "disabled");
  });
}

// Evento de clique no botão de desistir
quit_quiz.onclick = () => {
  window.location.reload();

}

// Seleciona o botão de próximo
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Evento de clique no botão de próximo
next_btn.onclick = () => {
  if (que_count < round.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time";
    next_btn.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
}
// save_btn.onclick = () => {
//   user_box.classList.add("activeUser");
//   result_box.classList.remove("activeResult");
// }

// keep_btn.onclick = () => {
//   const required_user = document.getElementById("requireduser");
//   const required = document.getElementById("required");

//   if (save == false && userInput.value != "" && emailInput.value != "") {
//     saveUser();
//     save = true;
//   }
//   else if (userInput.value == "") {
//     required_user.style.display = 'flex';
//     required.style.display = 'none';
//   } else if (emailInput.value == "") {
//     required_user.style.display = 'none';
//     required.style.display = 'flex';
//   }
//   if (!userInput.value && !emailInput.value) {
//     required_user.style.display = 'flex';
//     required.style.display = 'flex';
//   }
// }

// Função para embaralhar uma array
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // Enquanto ainda houver elementos para embaralhar
  while (currentIndex !== 0) {
    // Escolhe um elemento aleatório
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Troca o elemento atual com o elemento aleatório
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


// Função para exibir perguntas na tela
function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  const option_list = document.querySelector(".option_list");

  let question = round[index].question;
  let options = [...round[index].options];
  // let correctAnswer = round[index].answer;
  // Verifica se há perguntas carregadas
  if (index < round.length) {
    // Criando o HTML para a pergunta
    let que_tag = `<span>${index + 1}. ${question}</span>`;

    // Criando o HTML para as opções
    let option_tag = options.map((option, i) => `
        <div class="option"">
            <p class="choice-prefix">${String.fromCharCode(65 + i)}</p>
            <p class="choice-text" data-number="${i + 1}">
                <span class="question">${option}</span>
            </p>
        </div>
    `).join('');

    // Atualizando o HTML com a pergunta e opções
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const optionElements = option_list.querySelectorAll(".option");
    // Define o atributo onclick para todas as opções disponíveis
    optionElements.forEach(optionElement => {
      optionElement.addEventListener("click", () => optionSelected(optionElement));
    });
    // }
  }
  if (questions == null) {
    // Exibe uma mensagem se não houver perguntas carregadas ou se o índice estiver fora do alcance
    que_text.innerHTML = '<span>Erro ao carregar a pergunta.</span>';
    option_list.innerHTML = '';
  }
  if (index == questions.length) {
    showResult();
  }
}

// Função para lidar com a opção selecionada pelo usuário
function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correcAns = round[que_count].answer;
  // const allOptions = option_list.children.length;

  if (userAns == correcAns) {
    userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIconTag);
    for (i = 0; i < option_list.children.length; i++) {
      if (option_list.children[i].textContent == correcAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
      }
    }
  }
  for (i = 0; i < option_list.children.length; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.classList.add("show");
}

// Função para exibir o resultado do quiz
function showResult() {
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  let iconTag = '<svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  const icon = document.querySelector(".icon");
  icon.style.color = userScore == questions.length ? "#daa520" : ((userScore == 8 || userScore == 9) ? '#c0c0c0' : (userScore == 7 ? '#CD7F32' : '#0263ca'));

  let scoreTag = userScore == questions.length ? '<span>Parabéns! Você obteve <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>' :
    ((userScore == 8 || userScore == 9) ? '<span>Ótimo! Você obteve <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>' :
      (userScore == 7 ? '<span>Legal, você obteve <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>' :
        '<span>Desculpa, você obteve apenas <p>' + userScore + '</p> de <p>' + questions.length + '</p></span>'));
  icon.innerHTML = iconTag;
  scoreText.innerHTML = scoreTag;
}

// Função para iniciar o temporizador
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeText.textContent = "Acabou";
      const allOptions = option_list.children.length;
      let correcAns = questions[que_count].resposta_verdadeira;
      for (i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent == correcAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        }
      }
      for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.classList.add("show");
    }
  }
}

// Função para iniciar a linha de tempo
// function startTimerLine(time) {
//   counterLine = setInterval(timer, 20);
//   function timer() {
//     time += 1;
//     time_line.style.width = time + "px";
//     if (time > 549) {
//       clearInterval(counterLine);
//     }
//   }
// }
function startTimerLine(duration) {
  // const time_line = document.querySelector(".time_line"); // Certifique-se de selecionar o elemento correto
  const parentWidth = time_line.parentElement.offsetWidth; // Largura do contêiner pai
  let currentWidth = 0; // Largura inicial da barra
  let interval = 0
  if(parentWidth <= 480){
    interval = 80;
  }else {
    interval = 58;
  }
  // Calcula o incremento proporcional para que a barra cresça até 100% em 'duration' milissegundos
  // const increment = parentWidth * (duration / 20); // Dividido por 20, pois o intervalo é 20ms

  counterLine = setInterval(timer, interval); // O intervalo de atualização da largura é de 20ms

  function timer() {
    currentWidth += duration; // Aumenta a largura
    time_line.style.width = currentWidth + "px"; // Atualiza a largura em porcentagem

    if (currentWidth >= parentWidth) {
      clearInterval(counterLine); // Para quando atingir 100%
    }
  }
}



// Função para atualizar o contador de perguntas
function queCounter(index) {
  let totalQueCounTag = '<span><p>' + index + '</p> de <p>' + limit + '</p> Questões</span>';
  bottom_ques_counter.innerHTML = totalQueCounTag;
}
