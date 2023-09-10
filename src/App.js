import "./App.css";
import { useEffect, useState } from "react";
import Table from "./components/Table";

function App() {
  // const [employees, setEmployees] = useState([]);
  // useEffect(() => {
  //   fetch("https://dummy.restapiexample.com/api/v1/employees")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data);
  //       setEmployees(() => [data.data]);
  //     });
  // }, []);
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
