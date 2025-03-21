import "./style.css"
import {Page, images} from "../../components"

function Corvinal() {
  return (
    <Page
      content={{
        title: "Bem-vindo à Corvinal!",
        color: [
          "rgba(145, 143, 143, 0.9)",
          "rgb(6, 46, 73)"
        ],
        text: [
          "A Corvinal é uma das quatro casas da Escola de Magia e Bruxaria de Hogwarts no universo de Harry Potter, criado por J.K. Rowling. Fundada por Rowena Corvinal, a casa valoriza inteligência, sabedoria, criatividade e aprendizado. Seu símbolo é uma águia, suas cores são azul e bronze (ou azul e prata nos filmes), e seu fantasma residente é a Dama Cinzenta, que na verdade é Helena Corvinal, filha da fundadora. A sala comunal da Corvinal fica em uma torre alta de Hogwarts e é acessada através da solução de enigmas, incentivando o raciocínio de seus membros.",
          "Famosa por abrigar alguns dos alunos mais brilhantes da escola, como Luna Lovegood e Cho Chang, a Corvinal é ideal para aqueles que buscam conhecimento e valorizam o pensamento crítico."
        ],
        people: [
          { name: "Luna Lovegood", url: images.luna, alt: "luna" },
          { name: "Cho Chang", url: images.cho, alt: "cho" }
        ],
        bg: images.backC
      }}
    />

  )
}

export default Corvinal;