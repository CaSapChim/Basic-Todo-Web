import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCheck, faTrash, faMoon, faSun, faEllipsis, faClose } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  library.add(faBars, faCheck, faTrash, faSun, faMoon, faTrash, faCheck, faEllipsis, faClose);
  return (
    <div className="h-screen w-full bg-[#0093E9] bg-[linear-gradient(160deg,#0093E9_0%,#80D0C7_100%)]">
      <Header/>
      <Input/>
    </div>
  )
}

export default App
