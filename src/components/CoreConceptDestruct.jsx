export default function CoreConceptDestruct({ image, title, description }) {
  return (
    <li>
      <img src={image} alt="..." />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>While desctructoring make sure the keys names are matching</p>
    </li>
  );
}
