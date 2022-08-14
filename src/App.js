import "./App.css";
import { DrawerAppBar } from "./components/Appbar";
import Welcome from "./components/welcome.js";
function App() {
  return (
    <div>
      <DrawerAppBar>
        <Welcome />
      </DrawerAppBar>
    </div>
  );
}

export default App;
