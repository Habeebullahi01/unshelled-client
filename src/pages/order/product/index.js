import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
// const url = "http://localhost:4000/order_items?limit=5";
const url = "https://unshelled-api.cyclic.app/order_items/";
const Product = ({ props }) => {
  const { state } = useLocation();
  const { auth } = useContext(AuthContext);
  const [delRes, setDelRes] = useState(null);
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
        onClick={async () => {
          await axios
            .delete(`${url}${state.id}`, {
              auth: {
                username: auth.username,
                password: auth.password,
              },
            })
            .then((d) => {
              // return <p>{d.data}</p>;
              // console.log(d);
              setDelRes(d.data);
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        Delete this product.
      </button>
      <p>{delRes}</p>
      <Link to={"/order"}>Back to orders page</Link>
    </>
  );
};

export default Product;
