import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="main_container">
        <Header />
        <Form />
      </main>
    </>
  );
}

export default App;
