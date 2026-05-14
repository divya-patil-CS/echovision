type Props = {
  image: string;
  description: string;
};

export default function HoverImage({ image, description }: Props) {
  const speak = () => {
    const speech = new SpeechSynthesisUtterance(description);
    window.speechSynthesis.speak(speech);
  };

  const stopSpeak = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <img
      src={image}
      alt="chart"
      onMouseEnter={speak}
      onMouseLeave={stopSpeak}
      className="w-80 rounded-xl border-2 border-white"
    />
  );
}