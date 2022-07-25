import React, {useState, useEffect} from "react";
import "../Styles.css";
import Base from "./Base";
import { API } from "../backend";
import Card from './Card';
import { getProducts } from "./helper/coreapicalls";

function Home() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  const loadAllProducts = () => {
    getProducts().then(data => {
      if(data?.err){
        setError(data.err);
      }else{
        setProducts(data)
      }
    })
  }

  useEffect(()=> {
    loadAllProducts()
  }, [])

  console.log("API IS", API);
  return (
    <Base title="AstroLivery" description="Welcome to the Store">
      <div className="row">
        {products.map((product, index) => {
          return(
            <div className="col-4 mb-4">
              <Card product={product}/>
            </div>
          )
        })}
      </div>
    </Base>
  );
}

export default Home;
