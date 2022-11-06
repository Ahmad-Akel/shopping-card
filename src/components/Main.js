import "../App.css";
import { addToCard, emptyCard, removeFromCard } from "../Redux/action";
import { useDispatch } from "react-redux";
import { productData } from "../Redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { PRODUCT_LIST } from "../Redux/constants";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);

  console.log("the data in main: ", data);

  useEffect(() => {
    dispatch(productData());
  }, []);
  return (
    <div className="Main">
      <div>
        <button onClick={() => dispatch(emptyCard())}>Empty card</button>
      </div>

      <div className="product-container">
        {data.map((item) => (
          <div className="product-item">
            <img
              src={item.photo}
              alt=""
              style={{ height: "200px", width: "300px" }}
            />
            <div>Color: {item.color}</div>
            <div>Category: {item.category}</div>
            <div>Brand: {item.brand}</div>
            <div>
              <button onClick={() => dispatch(addToCard(item))}>
                Add to Card
              </button>
              <button onClick={() => dispatch(removeFromCard(item.id))}>
                Remove from Card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
