import "../App.css";
import { addToCard, emptyCard, removeFromCard } from "../Redux/action";
import { useDispatch } from "react-redux";
import { productData } from "../Redux/productAction";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state);

  console.log("the data in main: ", data.productData);
  const product = {
    name: "Shoe",
    category: "Sport",
    price: 100,
    available: true,
  };
  return (
    <div className="Main">
      <button onClick={() => dispatch(addToCard(product))}>Add to card</button>
      <div>
        <button onClick={() => dispatch(removeFromCard(product))}>
          Remove from card
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCard())}>Empty card</button>
      </div>
      <div>
        <button onClick={() => dispatch(productData())}>
          Call product list
        </button>
      </div>
    </div>
  );
}

export default Main;
