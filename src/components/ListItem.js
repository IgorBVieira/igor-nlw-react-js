export default function ListItem(props) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={props.url}>
        <img src={props.imageUrl} alt={props.alt} />
      </a>
    </li>
  );
}
