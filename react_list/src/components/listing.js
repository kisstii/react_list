import { v4 as uuidv4 } from "uuid";

const cssList = ["position", "display", "border", "padding", "margin", "overflow", "background", "font", "text", "transform"];

const ListItem = (props) => {
  return (
    <li>
      <input type="checkbox" name={props.value} id={props.value + "-id"}></input>
      <label htmlFor={props.value + "-id"}>{props.value}</label>
    </li>
  );
};

const UList = (props) => {
  const elements = props.map((item) => <ListItem value={item} key={uuidv4()} />);
  return <ul>{elements}</ul>;
};

const Form = () => {
  const myList = UList(cssList);
  return <form>{myList}</form>;
};

export default Form;
