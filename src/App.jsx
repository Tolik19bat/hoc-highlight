import "./App.css";
import List from "./components/List";
import list from "./data/data";

function App() {
  return (
    <>
      <List list={list} />
    </>
  );
}

export default App;
