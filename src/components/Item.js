import { Link } from "react-router-dom";

const Item = ({ props }) => {
  const id = props.product_id;
  return (
    <Link to={"/order/" + id} state={props}>
      <div>
        <p>This product is in the {props.product_category} category.</p>
        <p>
          It costs {props.price} and will be shipped on or before {props.date}.{" "}
        </p>
      </div>
    </Link>
  );
};
export default Item;
