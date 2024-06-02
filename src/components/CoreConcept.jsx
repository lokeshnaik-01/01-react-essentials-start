export default function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Props is set by react we just send all the values</p>
    </li>
  );
}
