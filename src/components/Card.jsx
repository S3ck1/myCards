
const Card = (props) => {
  return (
    <div className="card" style={{backgroundColor: props.background}}>
      <h1 style={{ fontSize: "24px" }}>{props.title}</h1>
      <ul>
        <li>{props.item1}</li>
        <li>{props.item2}</li>
        <li>{props.item3}</li>
      </ul>
    </div>
  );
};

export default Card;