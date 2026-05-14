import { useEffect } from "react";

type Props = {
  onStart: () => void;
};

export default function WelcomeScreen({ onStart }: Props) {

  useEffect(() => {

    const speakWelcome = () => {

      const speech = new SpeechSynthesisUtterance(
        "Welcome to EchoVision AI. Press any key to continue."
      );

      speech.rate = 1;
      speech.pitch = 1;

      window.speechSynthesis.speak(speech);
    };

    speakWelcome();

    const handleKey = () => {
      window.speechSynthesis.cancel();
      onStart();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };

  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-8">
          EchoVision AI
        </h1>

        <p className="text-2xl animate-pulse">
          Press Any Key To Continue
        </p>
      </div>
    </div>
  );
}
