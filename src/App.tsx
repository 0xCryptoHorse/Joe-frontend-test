import Layout from "components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailCollection from "pages/detail-collection";
import "./assets/style/global.scss";

import "App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={""} element={<DetailCollection />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
