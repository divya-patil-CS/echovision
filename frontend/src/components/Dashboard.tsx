import { useState } from "react";
import HoverImage from "./HoverImage";

export default function Dashboard() {
  const [image, setImage] = useState<string | null>(null);

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        EchoVision AI Dashboard
      </h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mb-10"
      />

      {image && (
        <HoverImage
          image={image}
          description="
          This uploaded chart shows important visual data.
          AI explanation will be generated here.
          "
        />
      )}
    </div>
  );
}