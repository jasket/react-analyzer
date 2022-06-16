import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevState) => prevState + 1);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul className="block m-0 text-center">
          <li className="underline text-blue-400 hover:bg-blue-100 inline-block px-6 py-2">
            <Link to="/">reconcile</Link>
          </li>
          <li className="underline text-blue-400 hover:bg-blue-100 inline-block px-6 py-2">
            <Link to="/memo">memo</Link>
          </li>
        </ul>
      </header>
      <div className="p-4">
        <AppContext.Provider value={seconds}>
          <Outlet />
        </AppContext.Provider>
      </div>
    </div>
  );
};

export default App;
