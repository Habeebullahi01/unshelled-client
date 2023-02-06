// import axios from "axios";
import { useLocation, Link } from "react-router-dom";

const Product = ({ props }) => {
  const { state } = useLocation();
  // const { id } = useParams();
  return (
    <>
      <p>
        The product is in the category <i>{state.product_category}</i>{" "}
      </p>
      <Link to={"edit"} state={state}>
        Edit this product
      </Link>
      <button
        onClick={() => {
          // axios.delete()
        }}
      >
        Delete this product.
      </button>
    </>
  );
};

export default Product;
