import "./style.css";
import { Back, Main, Card, Header, images } from "../../components";

function Grifinoria() {
  return (
    <div>
      <div className="container">
        <Header className="header">
          <h1>Bem-vindo à Grifinória!</h1>
        </Header>
        <Main>
          <p>
            A Grifinória é uma das quatro casas da Escola de Magia e Bruxaria de
            Hogwarts no universo de Harry Potter, criado por J.K. Rowling.
            Fundada por Godrico Grifinória, a casa é conhecida por valorizar
            coragem, bravura, determinação e honra. Seu símbolo é um leão, suas
            cores são vermelho e dourado, e seu fantasma residente é Sir
            Nicholas de Mimsy-Porpington, mais conhecido como o Nick Quase Sem
            Cabeça. A sala comunal da Grifinória fica na Torre da Grifinória e é
            acessada através de um quadro da Mulher Gorda.
          </p>
          <p>
            Muitos dos personagens principais da série, como Harry Potter,
            Hermione Granger e Rony Weasley, pertencem a essa casa, que tem uma
            longa rivalidade com a Sonserina.
          </p>
          <div className="g-images">
            <Card>
              <img src={images.harryPorco} alt="Harry Porco" />
              <figcaption>Harry Potter</figcaption>
            </Card>
            <Card>
              <img src={images.hermi} alt="Hermione" />
              <figcaption>Hermione Granger</figcaption>
            </Card>
            <Card>
              <img src={images.ronyy} alt="Rony" />
              <figcaption>Rony Weasley</figcaption>
            </Card>
          </div>
        </Main>
      </div>
      <Back style={{url: images.backG}}/> 
    </div>
  );
}

export default Grifinoria;
