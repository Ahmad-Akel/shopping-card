import logo from "./logo.svg";
import "./App.css";
import { addToCard } from "./Redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "Shoe",
    category: "Sport",
    price: 100,
    available: true,
  };
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCard(product))}>Add to card</button>
    </div>
  );
}

export default App;
