import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {

  const [state, setState] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setState(state + 1)}>Plus</button>
      <Header number={state} />
      <Footer />
    </div>
  );
}

export default App;
