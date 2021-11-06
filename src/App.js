import "./App.css";
import Header from "./components/header/Header";
import Settings from "./components/setting/Settings";
import Container from "./components/container/Container";
import MainTable from "./components/table/MainTable";

function App() {
  return (
    <div className="App">
      <Header/>
      <Settings/>
      <Container>
        <MainTable/>
      </Container>
    </div>
  );
}

export default App;
