import HoverImage from "./HoverImage";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      
      <h1 className="text-5xl font-bold mb-10">
        EchoVision AI Dashboard
      </h1>

      <p className="text-lg mb-8 text-gray-300">
        Upload charts, graphs, or images for AI-powered voice explanation
      </p>

      <HoverImage />

    </div>
  );
}