import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import SpotlightCursor from "./ui/SpotlightCursor";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        className={""}
        autoClose={1500}
        pauseOnHover
        draggable
      />
      <SpotlightCursor />
    </>
  );
}

export default App;
