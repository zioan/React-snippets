import React from "react";
import Axios from "axios";

export default function getDataAxios() {
  const getData = () => {
    Axios.get("http://dummy.restapiexample.com/api/v1/employees").then(
      (response) => {
        console.log(response.data.data);
      }
    );
  };
  return (
    <div>
      <h2>Axios API</h2>
      <button onClick={getData}>Fetch Data</button>
    </div>
  );
}
