import { useState } from "react";

function SubmitOrder({ activeTiles, tiles }) {
  const [order, setOrder] = useState([]);
  const submit = () => {
    
    let newOrder = [];

    for (let i = 0; i < activeTiles.length; i++) {
      newOrder.push(tiles[i][activeTiles[i]]);
    }
    setOrder(newOrder);
  };

  return (
    <>
      <div className="footer-container">
        <button className="btn btn-primary" onClick={submit}>
          Submit Order
        </button>
        {order.length>0 ? <h3>Your order is: {order.join(" ,")}</h3> : null}
      </div>
      
    </>
  );
}
export default SubmitOrder;
