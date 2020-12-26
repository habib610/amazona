import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeCartItems } from "../Actions/cartActions";
import MessageBox from "../Home/MessageBox";

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCart = (id) => {
    // delete
    dispatch(removeCartItems(id))
  };

  const checkOutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };


  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is Empty
            <Link to="/">Go to homepage</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row">
                  <div>
                    <img className="small" src={`/${item.image}`} alt={item.name} />
                  </div>

                  <div className="min-30">
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                          
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((prd) => (
                        <option key={prd + 1} value={prd + 1}>
                          {prd + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>${item.price}</div>
                  <div>
                    <button onClick={()=> removeFromCart(item.product)}>
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>
                Subtotal: (
                {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                : $
                {cartItems.reduce(
                  (a, c) => a + c.price * c.qty,
                  0
                )}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkOutHandler}
                disabled={cartItems.length === 0}
                className="primary block"
              >
                Proceed Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
