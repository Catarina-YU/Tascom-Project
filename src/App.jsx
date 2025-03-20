// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Title, Main, Back, Header, Card } from "./components";

import "./App.css";

import grifinoria from "./components/feed/grifinoria.jpg";
import corvinal from "./components/feed/corvinal.jpg";
import lufalufa from "./components/feed/lufa-lufa.jpg";
import sonserina from "./components/feed/sonserina.jpg";

// import Grifinoria from "./components/Content/grifinoria";

function App() {
  return (
    <div className="App">
      <Back />
      <Header>
        <Title>Horgwarts House</Title>
      </Header>
      <Main>
        <div>
          <Card>
            <img src={grifinoria} alt="grifinoria" />
            <a href="" className="house g">
              Descubra Mais
            </a>
          </Card>
          <Card>
            <img src={corvinal} alt="corvinal" />
            <a href="" className="house c">
              Descubra Mais
            </a>
          </Card>
          <Card>
            <img src={lufalufa} alt="lufalufa" />
            <a href="" className="house l">
              Descubra Mais
            </a>
          </Card>
          <Card>
            <img src={sonserina} alt="sonserina" />
            <a href="" className="house s">
              Descubra Mais
            </a>
          </Card>
        </div>
      </Main>
    </div>
  );
}

// // function Hou () {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<App/>} />
//         <Route path= "/grifinoria" element={<Grifinoria/>} />
//       </Routes>
//     </Router>
//   )
// }

export default App;
