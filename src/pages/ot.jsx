import { useEffect, useState } from "react";
import "../styles/otstyles.css";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false)

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result) {
        setProducts((prevData) => [...prevData, result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if(products && products.length === 100) setDisableButton(true)
  },[products])

  if (loading) {
    return <div>The website is loading please wait</div>;
  }

  console.log(products)
  return (
    <div className="load-container">
      <div className="load-product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="load-product" key={item.id}>
                <img src={item.thumbnail} alt={item.title}/>
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button disabled={disableButton} onClick={() => setCount(count + 1)} className="load-product-button">Load More Products</button>
        {disableButton ? <p>You have reached 100 products</p> : null}
      </div>
    </div>
  );
}

export default LoadMore;
