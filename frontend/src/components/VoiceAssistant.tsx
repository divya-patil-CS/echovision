import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceAssistant = () => {
  const { transcript, listening, resetTranscript } =
    useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
  };

  return (
    <div
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontSize: "24px",
      }}
    >
      <h1>EchoVision AI Voice Assistant</h1>

      <button
        onClick={startListening}
        style={{
          padding: "15px",
          fontSize: "20px",
          marginTop: "20px",
        }}
      >
        Start Voice Assistant
      </button>

      <button
        onClick={resetTranscript}
        style={{
          padding: "15px",
          fontSize: "20px",
          marginLeft: "20px",
        }}
      >
        Reset
      </button>

      <h2 style={{ marginTop: "40px" }}>
        Mic Status: {listening ? "Listening..." : "Stopped"}
      </h2>

      <h2 style={{ marginTop: "20px" }}>
        You Said:
      </h2>

      <p>{transcript}</p>
    </div>
  );
};

export default VoiceAssistant;