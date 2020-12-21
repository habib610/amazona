import { BrowserRouter, Link, Route } from "react-router-dom";
import CartScreen from "./Components/CartScreen/CartScreen";
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";



function App() {

  return (
    <BrowserRouter>
    <div className="grid-container">
   <header  className="row">
     <div>
<Link to="/" className="brand">Amazona</Link>
     </div>
     <div><Link to="/">Cart</Link>
     <Link to="/">SignIn</Link>
     </div>
   </header>
   <main>
     <Route path="/cart/:id?" component={CartScreen}></Route>
   <Route   exact path="/" component={Home} ></Route>
   <Route path="/product/:id"  component={Details} ></Route>
   </main>
   <footer className="row center">
            All Right Reserved
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
