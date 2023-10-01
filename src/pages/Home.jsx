import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
const Home = (isLoggedIn) => {
  const API_URL = "https://fakestoreapi.com/products";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPoductData() {
    setLoading(true);

    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setItems(data);
    } catch (error) {
      console.log("error occur", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPoductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : items.length > 0 ? (
        <div className="grid xs:grid-col-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {items.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No post found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
