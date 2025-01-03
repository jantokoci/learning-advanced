import { useEffect, useState } from "react";

//needs fix

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      
      if (data && data.products && data.products.lenght > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

console.log(data, error, loading)

if(loading)
     {
        return <p>im loading mother fucker</p>
     }
else
  return (
    <div>
      <h1>custom scroll indicator</h1>
      <div className="scroll-cont">
        {
            data && data.length > 0 ?
            data.map((dataItem) => <p>{dataItem.title}</p>)
            : null
        }
      </div>
    </div>
  );
}
