import React, { useState, useEffect } from "react";
import CombineTable from "./global/combine_table/CombineTable";
import LoadingPage from "./pages/loadingPage/LoadingPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="h-svh relative">
        {isLoading && (
          <div className="fixed inset-0 z-50">
            <LoadingPage />
          </div>
        )}

        <div className={isLoading ? "invisible" : "visible"}>
          <CombineTable />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
