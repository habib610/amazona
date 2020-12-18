import Products from './Components/Products/Products';
import data from './data'

function App() {
  return (
    <div className="grid-container">
   <header  className="row">
     <div>
<a href="#" className="brand">Amazona</a>
     </div>
     <div><a href="#">Cart</a>
     <a href="#">SignIn</a>
     </div>
   </header>
   <main className="row center">
    {
      data.products.map(product => <Products key={product.id} product={product} ></Products> )
    }
   </main>
   <footer class="row center">
            All Right Reserved
        </footer>
    </div>
  );
}

export default App;
