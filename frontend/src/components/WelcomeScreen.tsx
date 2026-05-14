import { useEffect } from "react";

type Props = {
  onStart: () => void;
};

export default function WelcomeScreen({
  onStart,
}: Props) {
  useEffect(() => {
    const speech = new SpeechSynthesisUtterance(
      "Welcome to EchoVision AI. Press any key to continue."
    );

    window.speechSynthesis.speak(speech);

    const handleKey = () => {
      window.speechSynthesis.cancel();
      onStart();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKey
      );
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-10">
        EchoVision AI
      </h1>

      <p className="text-2xl animate-pulse">
        Press Any Key To Continue
      </p>
    </div>
  );
}
