import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import SpotlightCursor from "./ui/SpotlightCursor";
import { ToastContainer } from "react-toastify";
import ContextPool from "./utils/Contextpool";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContextPool />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <ToastContainer
        position="bottom-right"
        className={""}
        autoClose={1500}
        pauseOnHover
        draggable
      />
      <SpotlightCursor />
    </QueryClientProvider>
  );
}

export default App;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import NotFound from "./components/NotFound";
// import SpotlightCursor from "./ui/SpotlightCursor";
// import { ToastContainer } from "react-toastify";
// import ContextPool from "./utils/Contextpool";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<ContextPool />}>
//             <Route index element={<Home />} />
//             <Route path="*" element={<NotFound />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//       <ToastContainer
//         position="bottom-right"
//         className={""}
//         autoClose={1500}
//         pauseOnHover
//         draggable
//       />
//       <SpotlightCursor />
//     </>
//   );
// }

// export default App;
