import React, { useEffect, useState } from "react";
import * as Services from "../../Services/Services";

const Table = () => {

  const [deadlines, setDeadlines] = useState([]);

  const getDeadlines = async() => {
    try {
      let resp = await Services.getDeadlines();
      let { deadlineList } = resp.data;
      setDeadlines(deadlineList);
    } catch (error) {
      console.dir(error);
    }
  }

  useEffect(() => {
    getDeadlines()
  }, []);

  return (
    <>
      {
        deadlines.length > 0 ?
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Semanas</th>
                <th scope="col">Interés normal</th>
                <th scope="col">Interés puntual</th>
              </tr>
            </thead>
            <tbody>
              {
                deadlines.map(({ _id, weeks, normalRate, punctualRate }, count = 0) => (
                  <tr key={_id}>
                    <th scope="row">{count + 1}</th>
                    <td>{weeks}</td>
                    <td>{normalRate}</td>
                    <td>{punctualRate}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        :
          <h4>No hay cotizaciones</h4>
      }
      {/* <div onClick={getDeadlines()}></div> */}
    </>
  );
};

export default Table;