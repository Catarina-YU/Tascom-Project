import "./style.css"
import {Page, images} from "../../components"

function Lufalufa() {
  return (
    <Page
      content={{
        title: "Bem-vindo à Lufa-Lufa!",
        color: [
          "rgba(0, 0, 0, 0.9)",
          "rgb(234, 171, 32)"
        ],
        text: [
          "A Lufa-Lufa é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts no universo de Harry Potter, criado por J.K. Rowling. Fundada por Helga Lufa-Lufa, a casa valoriza lealdade, paciência, trabalho duro e justiça. Seu símbolo é um texugo, suas cores são amarelo e preto, e seu fantasma residente é o Frei Gorducho. A sala comunal da Lufa-Lufa fica próxima às cozinhas de Hogwarts e é conhecida por ser aconchegante e acolhedora. Embora muitas vezes subestimados, os lufanos se destacam por sua dedicação e caráter íntegro.",
          "Entre seus membros notáveis estão Cedrico Diggory e Ninfadora Tonks. A casa é conhecida por tratar todos de forma igualitária e por sua forte ética de trabalho."
        ],
        people: [
          { name: "Cedrico Diggory", url: images.Cedric, alt: "Cedric" },
          { name: "Ninfadora Tonks", url: images.Tonks, alt: "tonks" }
        ],
        bg: images.backL
      }}
    />

  )
}

export default Lufalufa;