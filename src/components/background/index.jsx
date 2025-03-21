import "./style.css";

export default function Back({ style = {} }) {
  const { url = "", opacity = 1 } = style;
  return (
    <figure
      className="back"
      style={{ 
        backgroundImage: url ? `url(${url})` : "none", 
        opacity: opacity
      }}
    ></figure>
  );
}
