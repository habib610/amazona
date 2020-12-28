import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./Components/CartScreen/CartScreen";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";



function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">Amazona</Link>
          </div>
          <div>
          <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route exact path="/" component={Home} ></Route>
          <Route path="/product/:id" component={Details} ></Route>
          <Route path="/signin" component={SignIn}></Route>
        </main>
        <footer className="row center">
          All Right Reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
