import "./App.css";
import Signin from "./component/siginin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/signup";
import Mailpage from "./component/mailpage";
import Table from "./component/tablemail";
import Compose from "./component/compose";
import { useContext } from "react";
import { UserContext, UserProvider } from "./component/context";
function App() {
 
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>

            <Route path="/mailpage" element={<Mailpage />}>
              <Route path="inbox" element={<Table />}></Route>
              <Route path="compose" element={<Compose />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
