import React from 'react'

const Calculator = () => {
  return (
    <form className="row g-3">
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Semanas</span>
        <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
      </div>
      <div className='row g-3 mb-3'>
        <div className='col-6'>
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">Tasa normal</span>
            <input type="number" className="form-control" value={0} disabled aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
        </div>
        <div className='col-6'>
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">Tasa puntual</span>
            <input type="number" className="form-control" value={0.0332} disabled aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
        </div>
      </div>
      <div className="col-12 ">
        <button type="submit" className="btn btn-primary">Calcular intereses</button>
      </div>
    </form>
  )
}

export default Calculator