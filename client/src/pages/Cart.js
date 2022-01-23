import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

function Cart({ cartItems, addItem, removeItem }) {
  // const [cart, setCart] = useState([]);
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <Wrapper className="cart-items">
      <h1>Cart Items</h1>
      <CartItems className="cart-items-header">
        {cartItems.length === 0 && (
          <div className="cart-items-empty"> No items are added</div>
        )}

        <div>
          {cartItems.map((item) => (
            <>
              <div key={item.id} className="cart-items-list"></div>
              <div className="cart-item-name">{item.name}</div>
              <img
                className="cart-items-image"
                src={item.image}
                alt={item.name}
              />
              <div className="information">
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
              </div>
              <div className="buttons">
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={() => addItem(item)}
                >
                  +
                </Button>
                <Button
                  size="small"
                  disableElevation
                  variant="contained"
                  onClick={() => removeItem(item)}
                >
                  -
                </Button>
              </div>
              <div className="cart-items-price">
                {item.quantity} x ${item.price}
              </div>
            </>
          ))}
          <div className="price-name"> Total Price </div>
          <div className="total-price"> $ {totalPrice}</div>
        </div>
      </CartItems>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
  background-color: lightblue;
`;

const CartItems = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  div {
    flex: 1;
  }
  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
  Button {
    margin: 2px;
  }
  .total-price,
  .price-name {
    margin: 4px;
  }
`;

export default Cart;