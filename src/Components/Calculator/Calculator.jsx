import React, { useState } from "react";
import * as Service from "../../Services/Services";
import * as Yup from "yup";
import { useFormik } from "formik";

const Calculator = () => {

  const [normalRate, setNormalRate] = useState("");
  const [punctualRate, setPunctualRate] = useState("");
  
  const formik = useFormik({
    initialValues: {
      weeks: ""
    },
    validationSchema: Yup.object({
      weeks: Yup.number().required("Campo obligatorio")
    }),
    onSubmit: async(datosFormulario) => {
      let { weeks } = datosFormulario;

      try {
        let resp = await Service.createDeadline(weeks);
        Service.getDeadlines();
        let { deadline } = resp.data;
        setNormalRate(deadline.normalRate);
        setPunctualRate(deadline.punctualRate);
      } catch (error) {
        console.dir(error);
      }
    }
  });

  return (
    <form className="row g-3">
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">
          Semanas
        </span>
        <input
          type="number"
          name="weeks"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value={ formik.values.weeks }
          onChange={ formik.handleChange }
        />
      </div>
      <div className="row g-3 mb-3">
        <div className="col-6">
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Tasa normal
            </span>
            <input
              type="number"
              className="form-control"
              disabled
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={normalRate}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="input-group input-group-sm">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Tasa puntual
            </span>
            <input
              type="number"
              className="form-control"
              disabled
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={punctualRate}
            />
          </div>
        </div>
      </div>
      <div className="col-12 ">
        <button className="btn btn-primary"
          type="submit"
          onClick={ formik.handleSubmit }
        >
          Calcular intereses
        </button>
      </div>
    </form>
  );
};

export default Calculator;
