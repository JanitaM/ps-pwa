import React from "react";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Routes from "./components/Routes";

function App() {
  const user = false;

  return (
    <main>
      <Routes />

      {/* {user ? <Home /> : <Landing />} */}
    </main>
  );
}

export default App;
