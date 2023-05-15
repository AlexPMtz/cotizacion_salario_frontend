import React, { useState } from "react";
import * as Service from "../../Services/Services";
import * as Yup from "yup";
import { useFormik } from "formik";

const Quote = ({ productItem }) => {
  const [normalPass, setNormalPass] = useState("");
  const [punctualPass, setPunctualPass] = useState("");

  const formik = useFormik({
    initialValues: {
      normalRate: "",
      punctualRate: "",
      productId: productItem._id,
      price: "",
      weeks: ""
    },validationSchema: Yup.object({
      normalRate: Yup.string().required("Campo obligatorio"),
      punctualRate: Yup.string().required("Campo obligatorio"),
      price: Yup.string().required("Campo obligatorio"),
      weeks: Yup.string().required("Campo obligatorio")
    }),
    onSubmit: async(datosFormulario) => {
      let { normalRate, punctualRate, productId, price, weeks } = datosFormulario;
console.log("hola");
      try {
        let resp = await Service.createCreditQuote(normalRate, punctualRate, productId, price, weeks);
        let { normalPass, punctualPass } = resp.data;
        setNormalPass(normalPass);
        setPunctualPass(punctualPass);
      } catch (error) {
        console.dir(error);
      }
    }
  });

  const getClg = () => {
    console.log("Hola mundo");
  }

  return (
    <form className="row g-3">
      <div className="col-6">
        <div className="input-group input-group-sm">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Precio producto
          </span>
          <input
            name="price"
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={ productItem ? productItem.price : "" }
            onChange={ formik.handleChange }
          />
        </div>
      </div>
      <div className="col-6">
        <div className="input-group input-group-sm">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Tasa normal
          </span>
          <input
            name="normalRate"
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={ formik.values.normalRate }
            onChange={ formik.handleChange }
          />
        </div>
      </div>
      <div className="col-6">
        <div className="input-group input-group-sm">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Plazo
          </span>
          <input
            name="weeks"
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={ formik.values.weeks }
            onChange={ formik.handleChange }
          />
        </div>
      </div>
      <div className="col-6">
        <div className="input-group input-group-sm">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Abono normal
          </span>
          <input
            type="number"
            className="form-control"
            disabled
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={ normalPass }
          />
        </div>
      </div>
      <div className="col-6">
        <div className="input-group input-group-sm">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Precio producto
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={ productItem ? productItem.price : "" }
            onChange={ formik.handleChange }
          />
        </div>
      </div>
      <div className="col-6">
        <div className="input-group input-group-sm">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Tasa puntual
          </span>
          <input
            name="punctualRate"
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={ formik.values.punctualRate }
            onChange={ formik.handleChange }
          />
        </div>
      </div>
      <div className="col-6">
        <div className="input-group input-group-sm">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Plazo
          </span>
          <input
            name="weeks"
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={ formik.values.weeks }
            onChange={ formik.handleChange }
          />
        </div>
      </div>
      <div className="col-6">
        <div className="input-group input-group-sm">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Abono puntual
          </span>
          <input
            type="number"
            className="form-control"
            disabled
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={ punctualPass }
          />
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary"
          type="submit"
          onClick={ getClg() }
        >
          Calcular
        </button>
      </div>
    </form>
  );
};

export default Quote;