import { Back, Main, Card, Header } from "../";
import "./style.css"

function Page({ content }) {
  return (
    <div>
      <div className="container" style={{backgroundColor: content.color[0]}}>
        <Header className="header">
          <h1 style={{color: content.color[1]}}>{content.title}</h1>
        </Header>
        <Main>
          {content.text?.map((p, index) => (
            <p key={index}>{p}</p>
          ))}

          <div className="images">
            {content.people?.map((per, index) => (
              <Card key={index}>
                <img src={per.url} alt={per.alt} style={{borderColor: content.color[1]}}/>
                <figcaption style={{color: content.color[1]}}>{per.name}</figcaption> 
              </Card>
            )) || []}
          </div>
        </Main>
      </div>
      <Back style={{url: content.bg}} />
    </div>
  );
}

export default Page;
