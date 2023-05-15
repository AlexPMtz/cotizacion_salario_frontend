import React, { useState, useEffect } from "react";
import * as Services from "../../Services/Services";

import Class from "./Table.module.css";

const Table = ({datos}) => {

  const [products, setProducts] = useState([]);

  const getProducts = async() => {
    try {
      let resp = await Services.getProducts();
      let { productList } = resp.data;
      setProducts(productList);
    } catch (error) {
      console.dir(error);
    }
  }

  useEffect(() => {
   getProducts();
  }, [])

  return (
    <>
    {
      products.length > 0 ?
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">SKU</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product, count = 0) => (
                <tr className={Class.cursor} key={product._id} onClick={() => datos(product)}>
                  <th scope="row">{ count + 1 }</th>
                  <td>{product.SKU}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      :
        <h4>No hay productos</h4>
    }
    </>
  );
};

export default Table;