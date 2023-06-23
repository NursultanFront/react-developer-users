import { AsideMenu } from "./components/aside-menu/AsideMenu";
import "./App.scss";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <AsideMenu />
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
