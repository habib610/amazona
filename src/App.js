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
      data.products.map(product => (
        <div className="card" key={product._id} >
         <a href={`product/${product._id}`}>
           <img src={product.image} alt={product.name} className="medium"/>
         </a>
         <div className="card-body">
           <a href={`product/${product._id}`}>
           <h2>{product.name}</h2>
           </a>
           <div className="rating">
           <span><i class="fa fa-star"></i></span>
           <span><i class="fa fa-star"></i></span>
           <span><i class="fa fa-star"></i></span>
           <span><i class="fa fa-star"></i></span>
           <span><i class="fa fa-star"></i></span>
           </div>
           <div className="price">
             $ {product.price}
           </div>
           </div>
       </div>
      ))
    }
   </main>
   <footer class="row center">
            All Right Reserved
        </footer>
    </div>
  );
}

export default App;
