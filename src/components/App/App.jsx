import List from "../List/List";
import Panel from "../Panel/Panel";
import ChangeBtns from "../ChangeBtns/ChangeBtns";
import { observer } from "mobx-react";
import MainStore from "../../stores/MainStore";
import { MainStoreContext } from "../../hooks/mainStoreContext";
import "./App.css";

const App = observer(() => (
  <MainStoreContext.Provider value={new MainStore()}>
    <Panel />
    <ChangeBtns />
    <List />
  </MainStoreContext.Provider>
));

export default App;
