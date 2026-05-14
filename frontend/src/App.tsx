import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {!started ? (
        <WelcomeScreen onStart={() => setStarted(true)} />
      ) : (
        <Dashboard />
      )}
    </>
  );
}