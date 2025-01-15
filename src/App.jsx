import React from "react";
import CombineTable from "./global/combine_table/CombineTable";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="h-svh">
        <CombineTable />
      </div>
    </BrowserRouter>
  );
}

export default App;
