import React from "react";
import BlockApp from "./BlockApp";
import { useState } from "react";
import { useEffect } from "react";

const GalleryApp = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch(
      "https://dummyjson.com/products?limit=10&skip=10&select=title,price,images"
    )
      .then((resp) => resp.json())
      .then((data) => setDatos(data.products));
  }, []);

  //   const blocks = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {datos.length &&
        datos.map((item) => <BlockApp key={item.id} item={item} />)}
    </div>
  );
};

export default GalleryApp;
