import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

function App() {
  return (
    <center>
      <AppName />
      <AddTodo />

      <div className="container text-center">
        <div className="row">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">04/10/2023</div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col-6">Go to College</div>
          <div className="col-4">04/10/2023</div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
