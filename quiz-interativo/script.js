const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["São Paulo", "Brasília", "Rio de Janeiro", "Belo Horizonte"],
    resposta: 1
  },
  {
    pergunta: "Qual planeta é conhecido como o planeta vermelho?",
    opcoes: ["Terra", "Marte", "Júpiter", "Saturno"],
    resposta: 1
  },
  {
    pergunta: "Quem escreveu 'Dom Casmurro'?",
    opcoes: ["Machado de Assis", "Carlos Drummond", "Clarice Lispector", "Monteiro Lobato"],
    resposta: 0
  }
];

let pontuacao = 0;
let perguntaAtual = 0;

function mostrarPergunta() {
  const container = document.getElementById("quiz-container");
  container.classList.add("fade");
  setTimeout(() => {
    container.classList.remove("fade");
    container.innerHTML = "";

    if (perguntaAtual < perguntas.length) {
      const q = perguntas[perguntaAtual];
      const titulo = document.createElement("p");
      titulo.textContent = `❓ ${q.pergunta}`;
      container.appendChild(titulo);

      q.opcoes.forEach((opcao, index) => {
        const btn = document.createElement("button");
        btn.textContent = opcao;
        btn.onclick = () => verificarResposta(index);
        container.appendChild(btn);
      });
    } else {
      mostrarResultado();
    }
  }, 300);
}

function verificarResposta(indice) {
  const correta = perguntas[perguntaAtual].resposta;
  const resultado = document.getElementById("resultado");

  if (indice === correta) {
    pontuacao++;
    resultado.textContent = "✅ Resposta correta!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = `❌ Resposta errada! A correta era: ${perguntas[perguntaAtual].opcoes[correta]}`;
    resultado.style.color = "red";
  }

  perguntaAtual++;
  setTimeout(() => {
    resultado.textContent = "";
    mostrarPergunta();
  }, 1500);
}

function mostrarResultado() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `<p>🎉 Você acertou ${pontuacao} de ${perguntas.length} perguntas!</p>
  <button onclick="reiniciarQuiz()">🔁 Tentar novamente</button>`;
}

function reiniciarQuiz() {
  pontuacao = 0;
  perguntaAtual = 0;
  document.getElementById("resultado").textContent = "";
  mostrarPergunta();
}

mostrarPergunta();