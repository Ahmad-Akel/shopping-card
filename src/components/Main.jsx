import "../App.css";
import { addToCard } from "../Redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "Shoe",
    category: "Sport",
    price: 100,
    available: true,
  };
  return (
    <div className="Main">
      <button onClick={() => dispatch(addToCard(product))}>Add to card</button>
    </div>
  );
}

export default Main;
