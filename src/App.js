import "./App.css";
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
  //
  // I would then pass in the employees into the table as a prop and use the table as just the display layer so that we dont have
  // API calls in the table component and allow it to be dumber.
  return (
    <div className="App">
      <Table />
    </div>
  );
}

export default App;
