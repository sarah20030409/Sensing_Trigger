import React from "react";
import CombineTable from "./global/combine_table/CombineTable";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="h-svh">
        {/* <LoadingPage /> */}
        <CombineTable />
      </div>
    </BrowserRouter>
  );
}

export default App;
