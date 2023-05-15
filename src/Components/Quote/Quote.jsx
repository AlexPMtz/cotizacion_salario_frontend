import React from "react";

const Quote = () => {
  return (
    <>
      <form className="row g-3">
        <div className="col-3">
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">Precio producto</span>
            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
        <div className="col-3">
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">Tasa normal</span>
            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
        <div className="col-3">
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">Plazo</span>
            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
        <div className="col-3">
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">Abono normal</span>
            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Calcular
          </button>
        </div>
      </form>
      <form className="row g-3 mt-2">
        <div className="col-3">
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">Precio producto</span>
            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
        <div className="col-3">
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">Tasa puntual</span>
            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
        <div className="col-3">
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">Plazo</span>
            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
        <div className="col-3">
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">Abono puntual</span>
            <input type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Calcular
          </button>
        </div>
      </form>
    </>
  );
};

export default Quote;