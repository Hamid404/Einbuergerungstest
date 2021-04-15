import './App.css';
import AnfangAnimation from './Components/Animation/AnfangAnimation';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Test from './Components/Testseite/TestSeite';
import Fragen from "./Components/310_Fragen/FragenSeite/FragenSeite";
import Info from "./Components/310_Fragen/InfoSeite/InfoSeite";
import Start from "./Components/310_Fragen/StartSeite/StartSeite";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
                <Route path={"/Test"} component={Test}></Route>
                <Route path={"/Fragen"} component={Fragen}></Route>
                <Route path={"/Info"} component={Info}></Route>
                <Route path={"/"} component={Start}></Route>
        </Switch>
      </BrowserRouter>

    </div>

  );
}

export default App;
