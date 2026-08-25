import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Suspense>
  );
}

export default App;
