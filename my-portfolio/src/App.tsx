import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
