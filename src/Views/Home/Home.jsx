import React, { useState } from 'react'
import Calculator from '../../Components/Calculator/Calculator';
import Quote from '../../Components/Quote/Quote';
import Table from '../../Components/Table/Table';
import TableDeadlines from '../../Components/TableDeadlines/TableDeadlines';
import WithCommonMenus from '../../HOC/WithCommonMenus';
import Class from './Home.module.css';

const Home = () => {

  const [productData, setProductData] = useState("");

  const datos = (product) => {
    setProductData(product);
  }

  return (
    <div className={Class.mainContainer}>
      <div className={Class.container}>
        <div className="container text-center">
          <div className="row g-3">
            <div className="col-8">
              <div className="card">
                <div className="card-header">
                  Productos
                </div>
                <div className='card-body'>
                  <Table datos={datos}/>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-header">
                  Calculdora interes
                </div>
                <div className='card-body'>
                  <Calculator />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-header">
                  Consultar plazos
                </div>
                <div className='card-body'>
                  <TableDeadlines />
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card-header">
                  Generar cotización
                </div>
                <div className='card-body'>
                  <Quote productItem={productData}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithCommonMenus(Home)