import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Qual das Relíquias da Morte você escolheria?",
    options: [
      { text: "A Varinha das Varinhas", house: "Sonserina" },
      { text: "A Pedra da Ressurreição", house: "Lufalufa" },
      { text: "A Capa da Invisibilidade", house: "Corvinal" },
      { text: "Nenhuma, prefiro confiar em mim", house: "Grifinoria" },
    ],
  },
  {
    question:
      "Qual dessas criaturas mágicas você gostaria de ter como companheira?",
    options: [
      { text: "Hipogrifo", house: "Grifinoria" },
      { text: "Fênix", house: "Corvinal" },
      { text: "Elfo-doméstico", house: "Lufalufa" },
      { text: "Basilisco", house: "Sonserina" },
    ],
  },
  {
    question: "Em qual aula você se destacaria?",
    options: [
      { text: "Defesa Contra as Artes das Trevas", house: "Grifinoria" },
      { text: "Aritmancia", house: "Corvinal" },
      { text: "Trato das Criaturas Mágicas", house: "Lufalufa" },
      { text: "Poções", house: "Sonserina" },
    ],
  },
  {
    question: "O que você faria se visse alguém quebrando as regras?",
    options: [
      { text: "Enfrentaria a pessoa", house: "Grifinoria" },
      { text: "Analisaria a situação antes de agir", house: "Corvinal" },
      { text: "Chamaria um professor", house: "Lufalufa" },
      { text: "Usaria isso a meu favor", house: "Sonserina" },
    ],
  },
  {
    question: "Com qual personagem você mais se identifica?",
    options: [
      { text: "Harry Potter", house: "Grifinoria" },
      { text: "Luna Lovegood", house: "Corvinal" },
      { text: "Newt Scamander", house: "Lufalufa" },
      { text: "Draco Malfoy", house: "Sonserina" },
    ],
  },
  {
    question: "O que você mais gostaria de explorar em Hogwarts?",
    options: [
      { text: "A Floresta Proibida", house: "Grifinoria" },
      { text: "A biblioteca secreta", house: "Corvinal" },
      { text: "As estufas de Herbologia", house: "Lufalufa" },
      { text: "As passagens escondidas", house: "Sonserina" },
    ],
  },
  {
    question: "Qual feitiço você usaria com mais frequência?",
    options: [
      { text: "Expelliarmus (desarmar)", house: "Grifinoria" },
      { text: "Alohomora (abrir portas)", house: "Corvinal" },
      { text: "Lumos (iluminar)", house: "Lufalufa" },
      { text: "Petrificus Totalus (paralisar)", house: "Sonserina" },
    ],
  },
  {
    question: "Qual seria seu passatempo em Hogwarts?",
    options: [
      { text: "Participar do Quadribol", house: "Grifinoria" },
      { text: "Estudar na biblioteca", house: "Corvinal" },
      { text: "Conversar com os colegas", house: "Lufalufa" },
      { text: "Planejar estratégias para ganhar pontos", house: "Sonserina" },
    ],
  },
  {
    question: "Com quem você sentaria no Expresso de Hogwarts?",
    options: [
      { text: "Rony e Hermione", house: "Grifinoria" },
      { text: "Luna e Neville", house: "Corvinal" },
      { text: "Cedrico Diggory", house: "Lufalufa" },
      { text: "Pansy Parkinson", house: "Sonserina" },
    ],
  },
  {
    question: "Como você reagiria ao ser escolhido pelo Chapéu Seletor?",
    options: [
      { text: "Aceitaria com orgulho", house: "Grifinoria" },
      {
        text: "Perguntaria sobre o que o Chapéu está pensando",
        house: "Corvinal",
      },
      {
        text: "Desafiaria o Chapéu a me colocar onde eu quero",
        house: "Sonserina",
      },
      { text: "Aceitaria o destino e me adaptaria", house: "Lufalufa" },
    ],
  },
];

export default function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    Grifinoria: 0,
    Sonserina: 0,
    Corvinal: 0,
    Lufalufa: 0,
  });

  const navigate = useNavigate();

  const handleAnswer = (house) => {
    // Atualiza os pontos da casa
    setScores((prev) => ({
      ...prev,
      [house]: prev[house] + 1,
    }));

    // Passa para a próxima pergunta ou navega para a casa vencedora
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
      const [topHouse] = sorted[0];
      navigate(`/${topHouse.toLowerCase()}`);
    }
  };

  const q = questions[currentQuestion];

  return (
    <div className="question-container fade-in">
      <h2>{q.question}</h2>
      <div className="options">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(opt.house)}
            className="option-button"
            style={{ "--delay": `${i * 0.2}s` }}
          >
            {opt.text}
          </button>
        ))}
      </div>

      {/* Exibe o resultado após todas as perguntas */}
      {currentQuestion === questions.length && (
        <div className="result-container">
          <h3>
            Você pertence à casa{" "}
            {Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]}!
          </h3>
        </div>
      )}
    </div>
  );
}

