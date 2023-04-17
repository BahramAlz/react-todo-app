import React, { useEffect, useState } from "react";

const App = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/tasks")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return <div>
    {JSON.stringify(backendData)}
  </div>;
};

export default App;
