import "./style.css"
import {Page, images} from "../../components"

function Sonserina() {
  return (
    <Page
      content={{
        title: "Bem-vindo à Sonserina!",
        color: [
          "rgba(145, 143, 143, 0.9)",
          "rgb(7, 70, 7)"
        ],
        text: [
          "A Sonserina é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts no universo de Harry Potter, criado por J.K. Rowling. Fundada por Salazar Sonserina, a casa valoriza ambição, astúcia, determinação e engenhosidade. Seu símbolo é uma serpente, suas cores são verde e prata, e seu fantasma residente é o Barão Sangrento. A sala comunal da Sonserina fica nas masmorras de Hogwarts, abaixo do Lago Negro, dando-lhe um ambiente sombrio e misterioso. A casa tem uma reputação de abrigar bruxos talentosos e estrategistas, embora seja frequentemente associada à vilania devido à sua ligação com bruxos das trevas, como Lord Voldemort.",
          "No entanto, muitos sonserinos provaram ser leais e corajosos à sua própria maneira, como Severus Snape e Draco Malfoy, demonstrando que a casa vai além dos estereótipos."
        ],
        people: [
          { name: "Lord Voldemort", url: images.lord, alt: "lord" },
          { name: "Severus Snape", url: images.snape, alt: "snape" },
          { name: "Draco Malfoy", url: images.draco, alt: "draco"}
        ],
        bg: images.backS
      }}
    />

  )
}

export default Sonserina;