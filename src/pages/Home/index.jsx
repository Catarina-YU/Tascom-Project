import { Title, Main, Back, Header, Card, images } from "../../components";
import { Link } from "react-router-dom";


import "./style.css"

const houses = [
  { name: "Grifinória", img: images.grifinoria, link: "./grifinoria", class: "g" },
  { name: "Corvinal", img: images.corvinal, link: "/corvinal", class: "c" },
  { name: "Lufa-Lufa", img: images.lufalufa, link: "/lufalufa", class: "l" },
  { name: "Sonserina", img: images.sonserina, link: "/sonserina", class: "s" }
]

export default function Home() {
  return (

    <div className="home">
      <Back style={{url:images.hogwarts}}/>
      <Header>
        <Title>Horgwarts House</Title>
      </Header>
      <Main>
        <div>
          {houses.map((house) => (
            <Card key={house.name}>
              <img src={house.img} alt={house.name} />
              <Link to={house.link} className={`house ${house.class}`}>Descubra mais</Link>
            </Card>
          ))}
        </div>
      </Main>
    </div>
  )
}