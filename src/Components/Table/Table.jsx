import React from "react";

const Table = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Semanas</th>
          <th scope="col">Interés normal</th>
          <th scope="col">Interés puntual</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry the Bird</td>
          <td>Otto</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;