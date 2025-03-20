function image({ house }) {
  let caminho = "";
  switch ({ house }) {
    case "corvinal":
      caminho = "./corvinal.jpg";
      break;
  }
  return caminho;
}

function Feed({house}) {
  return <img src={image(house)} alt={house} />;
}

export default Feed;
