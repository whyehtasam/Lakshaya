import { createContext, useEffect, useState } from "react";

export const BatchContext = createContext({
  batch: [],
  handleBatchData: () => {},
});

export default function BatchContextProvider({ children }) {
  const [batch, setBatch] = useState([]);

  function handleBatchData(data) {
    setBatch(data);
  }

  useEffect(() => {
    console.log('Inside BatchContext',batch);
  }, [batch]);

  const ctxBatch = {
    handleBatchData,
    batch,
  };
  return (
    <BatchContext.Provider value={ctxBatch}>{children}</BatchContext.Provider>
  );
}
