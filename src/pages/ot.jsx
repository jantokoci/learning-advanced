import { useEffect, useState } from "react";
import "../styles/otstyles.css";

function LoadMore() {

  //Some errors, uniqe key problem or smh, i can do nothin about it

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0); //load more counting for the skip to know how wich product is already loaded
  const [disableButton, setDisableButton] = useState(false); //disable the loadmore button when products reached 100

async function fetchProducts(){ //fetching the dummy data from the website
  try {
    setLoading(true);
    const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
    const result = await response.json();

    console.log(result);
    if(result && result.products && result.products.length){ //if there is a result(data) and we have in the results a products, and its have a lenght then we set the products, but we already have a previous product, thats how we solve it
      setProducts((prevData) => [...prevData, ...result.products]);
      setLoading(false);
    }
    

  }catch(e){
    console.log(e); //error catchin
    setLoading(false);
  }
}

 useEffect(() => { //fetching the products when the count has changed(button clicked)
  fetchProducts();
 }, [count])

 useEffect(() =>{ //disable button when products reached 100
  if(products && products.length === 100){
    setDisableButton(true);
  }
 }, [products])

 if(loading){ //while fetching products the loading message
  return <div>The Site is Loading, Please wait!</div>
 }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {
          products && products.length ? products.map(item => <div className="product" key={item.id}><img src={item.thumbnail} alt={item.title}/><p>{item.title}</p></div>) : null
        }
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={()=> setCount(count+1)}>Load More Products</button>
      </div>
    </div>
  );
}

export default LoadMore;
