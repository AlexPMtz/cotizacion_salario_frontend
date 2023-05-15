import React from 'react'
import { GiTakeMyMoney} from 'react-icons/gi'
import Class from './Navbar.module.css'

const Navbar = () => {

  return (
    <nav className={"navbar fixed-top " + Class.color}>
      <div className="container-fluid justify-content-center">
        <GiTakeMyMoney className={ Class.fontStyleRight } />
        <h2 className="card-title">Cotización de créditos</h2>
        <GiTakeMyMoney className={ Class.fontStyleLeft } />
      </div>
    </nav>
  )
}

export default Navbar