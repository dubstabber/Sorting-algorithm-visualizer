import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header />
      <Form />
      <input style={{ display: "none" }} id="isSorted" defaultValue="0" />
    </>
  );
}

export default App;
