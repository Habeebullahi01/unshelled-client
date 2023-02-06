import { useLocation } from "react-router-dom";

const EditProduct = () => {
  const { state } = useLocation();
  return (
    <form>
      <p>A form pre-propulated with the current product data.</p>
      <input type={"number"} defaultValue={state.price} />
      <input type={"text"} defaultValue={state.product_category} />
      <input type={"datetime-local"} defaultValue={state.date} />
    </form>
  );
};

export default EditProduct;
