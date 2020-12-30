import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signOutAction } from "./Components/Actions/userActions";
import CartScreen from "./Components/CartScreen/CartScreen";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";



function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignIn = useSelector((state)=> state.userSignIn);
  const {userInfo} = userSignIn;

  const dispatch = useDispatch();

  const singOutHandler = () => {
    dispatch(signOutAction())
  }
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
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">{userInfo.name} {" "} <i className="fa fa-caret-down"></i> </Link>
                  <ul className="dropdown-content">
                    <Link to="#" onClick={singOutHandler} >SingOut</Link>
                  </ul>
                </div>
              ): (
                 <Link to="/signin">Sign In</Link>
              )
            }
           
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
