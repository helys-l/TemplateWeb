import { useState } from "react";
import { FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";

const TemplateCard = ({
  id,
  videoLaptopSrc,
  videoHpSrc,
  demoUrl,
  waNumber,
  features = [],
}) => {
  const [showHp, setShowHp] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const handleVideoEnd = () => {
    setShowHp(true);
  };

  const handleMessageClick = () => {
  const message = `
Halo! Saya ingin memesan Website ini.

Template No: ${id}

Fitur yang saya butuhkan:
- ${features.join('\n- ')}

  `;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, "_blank");
};


  return (
    <div className="rounded-3xl overflow-hidden border-4 border-pink-200 bg-yellow-50 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 w-full max-w-md mx-auto font-cartoon">
      {/* Video Preview */}
      <div className="w-full h-56 overflow-hidden rounded-t-3xl border-b-4 border-pink-100 bg-white flex items-center justify-center">
        {!showHp ? (
          <video
            src={videoLaptopSrc}
            className="w-full h-full object-cover transition-transform duration-500"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
          />
        ) : (
          <video
            src={videoHpSrc}
            className="w-full h-full object-cover transition-transform duration-500"
            autoPlay
            muted
            playsInline
            loop
          />
        )}
      </div>

      {/* CTA Section */}
      <div className="p-4 flex flex-col gap-3 bg-white transition-all duration-300">
        <div className="flex justify-between items-center">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-pink-600 font-semibold hover:underline"
          >
            <FaExternalLinkAlt className="mr-2" />
            Lihat Demo
          </a>

          <button
            onClick={handleMessageClick}
            className="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 shadow-md transition-all"
          >
            <FaWhatsapp />
            Pesan
          </button>
        </div>

        <p className="text-sm text-gray-600">
          Template #{id} • Romantis & Interaktif
        </p>

        {/* Tombol untuk toggle fitur */}
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="text-sm text-pink-600 underline hover:font-bold transition-all"
        >
          {showFeatures ? "Sembunyikan Fitur" : "Lihat Fitur"}
        </button>

        {/* Daftar fitur */}
        {showFeatures && (
          <ul className="text-sm text-gray-700 list-disc list-inside mt-2">
            {features.map((fitur, index) => (
              <li key={index}>{fitur}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TemplateCard;
