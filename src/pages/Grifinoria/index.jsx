import "./style.css"
import {Page, images} from "../../components"

function Grifinoria() {
  return (
    <Page
      content={{
        title: "Bem-vindo à Grifinória!",
        color: [
          "rgba(213, 139, 36, 0.9)",
          "rgb(119, 5, 5)"
        ],
        text: [
          "A Grifinória é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts no universo de Harry Potter, criado por J.K. Rowling. Fundada por Godrico Grifinória, a casa é conhecida por valorizar coragem, bravura, determinação e honra. Seu símbolo é um leão, suas cores são vermelho e dourado, e seu fantasma residente é Sir Nicholas de Mimsy-Porpington, mais conhecido como o Nick Quase Sem Cabeça. A sala comunal da Grifinória fica na Torre da Grifinória e é acessada através de um quadro da Mulher Gorda.",
          "Muitos dos personagens principais da série, como Harry Potter, Hermione Granger e Rony Weasley, pertencem a essa casa, que tem uma longa rivalidade com a Sonserina."
        ],
        people: [
          { name: "Harry Potter", url: images.harryPorco, alt: "Harry" },
          { name: "Hermione Granger", url: images.hermi, alt: "hermi" },
          { name: "Rony Weasley", url: images.ronyy, alt: "rony"}
        ],
        bg: images.backG
      }}
    />

  )
}

export default Grifinoria;