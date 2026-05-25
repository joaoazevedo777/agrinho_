/* --- JavaScript: Lógica do Quiz --- */

let score = 0;
const totalQuestions = 3;

function checkAnswer(questionNumber, isCorrect) {
    const feedback = document.createElement('p');
    
    if(isCorrect) {
        score++;
        alert("Correto! As abelhas são essenciais para a natureza.");
    } else {
        alert("Ops! Tente novamente na próxima.");
        // Se errar, ainda passa para próxima para não travar o fluxo simples
    }

    // Esconde a pergunta atual
    document.getElementById(`question-${questionNumber}`).classList.remove('active');

    // Mostra a próxima pergunta ou o resultado final
    if (questionNumber < totalQuestions) {
        document.getElementById(`question-${questionNumber + 1}`).classList.add('active');
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    const finalDiv = document.getElementById('final-result');
    finalDiv.classList.add('active');
    
    const scoreText = document.getElementById('score-display');
    scoreText.innerText = `Você acertou ${score} de ${totalQuestions} perguntas!`;
    
    // Mensagem baseada na pontuação
    if(score === 3) {
        alert("Parabéns! Você é um guardião das abelhas!");
    }
}
