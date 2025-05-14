import React from "react";
import Card from "../components/Card";
import HeartCanvas from "../components/Heart";
import Laptop1 from "../assets/laptop1.mp4";
import Laptop2 from "../assets/laptop2.mp4";
import Laptop3 from "../assets/laptop3.mp4";
import Laptop4 from "../assets/laptop4.mp4";

import Hp1 from "../assets/hp1.mp4";
import Hp2 from "../assets/hp2.mp4";
import Hp3 from "../assets/hp3.mp4";
import Hp4 from "../assets/hp4.mp4";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const templates = [
    {
      id: 1,
      videoLaptopSrc: Laptop1,
      videoHpSrc: Hp1,
      demoUrl: "https://loveyou-more.github.io/ForYou/",
      features:[
        "Tanggal Jadian",
        "Galeri Foto 3 Buah",
        "Chat Pertama",
        "Foto Kesukaan"
      ]
    },
    {
      id: 2,
      videoLaptopSrc: Laptop2,
      videoHpSrc: Hp2,
      demoUrl: "https://loveyou-more.github.io/ForYou3/",
      features:[
        "Tanggal Jadian",
        "Galeri Foto max 4 Buah",
        "Lagu",
        "Foto Kesukaan"
      ]
    },
    {
      id: 3,
      videoLaptopSrc: Laptop3,
      videoHpSrc: Hp3,
      demoUrl: "https://loveyou-more.github.io/ForYou2/",
      features:[
        "Tanggal Jadian",
        "Galeri Foto max 8 Buah",
        "Chat Pertama",
        "Foto Kesukaan",
        "Lagu"
      ]
    },
    {
      id: 4,
      videoLaptopSrc: Laptop4,
      videoHpSrc: Hp4,
      demoUrl: "https://helys-l.github.io/foryou/",
      features:[
        "Password",
        "Tanggal jadian",
        "Chat Pertama",
        "Foto Kesukaan",
        "Lagu dan Video max 3",
        "Chat Pertama",
        "Galeri Foto max 6",
        "Tambahan"
      ]
    },
  ];

  const waNumber = "6285708952132";

  return (
    <div className="relative min-h-screen w-full h-auto overflow-x-hidden  scroll-smooth font-sans text-gray-800">
      <HeartCanvas />

      {/* Header */}
      <header className="z-50 sticky top-0 bg-white/80 backdrop-blur-md shadow-lg flex justify-between items-center px-6 lg:px-24 py-4 transition-all duration-300 border-b-4 border-pink-200">
  <div className="text-2xl font-extrabold text-pink-600 tracking-tight drop-shadow-lg font-cartoon">
    WebRomantis
  </div>
  <nav className="space-x-6 text-gray-700 font-medium">
    <a href="#hero" className="hover:text-pink-600 transition">Home</a>
    <a href="#template" className="hover:text-pink-600 transition">Template</a>
  </nav>
</header>


      {/* Hero Section */}
      <section id="hero" className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-24 gap-12 rounded-xl shadow-xl">
  <div className="flex-1 space-y-6 bg-yellow-100/80 p-6 rounded-3xl border-4 border-pink-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] font-cartoon">
  <h1 className="text-5xl lg:text-6xl font-extrabold text-pink-700 leading-tight mb-4 drop-shadow-lg">
    Template Website Romantis & Interaktif
  </h1>
  <p className="text-lg lg:text-xl text-gray-700 mb-6 max-w-lg leading-relaxed">
    Temukan berbagai template website menarik, estetik, siap pakai dan yang pasti gratis hosting. Cocok untuk pasangan, kado, dan kenangan. Mulai percakapan di WhatsApp dan langsung pesan!
  </p>
  <div className="space-x-4">
    <a
      href={`https://wa.me/${waNumber}?text=Hai%20saya%20tertarik%20dengan%20template%20website%20Anda`}
      className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all shadow-[2px_2px_0_rgba(0,0,0,0.2)] hover:scale-105 transform duration-300 border-2 border-white"
    >
      Hubungi Kami
    </a>
  </div>
</div>


  <div className="overflow-hidden md:w-1/3 w-3/4 aspect-[3/2] transform hover:scale-105 transition duration-300 flex-1 bg-yellow-100/80 rounded-3xl border-4 border-pink-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]">
    <img
      src="https://st5.depositphotos.com/76479990/64752/v/450/depositphotos_647521796-stock-illustration-vector-couple-working-laptop-concept.jpg"
      alt="Romantic Website Template"
      className="w-full object-cover rounded-3xl"
    />
  </div>
</section>


      {/* Template Section */}
      <section id="template" className="relative z-10 px-6 lg:px-24 py-20 bg-white/70 backdrop-blur-md rounded-t-3xl shadow-inner">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-10 drop-shadow">
          Pilihan Template Website Siap Pakai
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {templates.map((template) => (
            <Card
              key={template.id}
              id={template.id}
              videoLaptopSrc={template.videoLaptopSrc}
              videoHpSrc={template.videoHpSrc}
              demoUrl={template.demoUrl}
              waNumber={waNumber}
              features={template.features}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-700 text-white px-6 lg:px-24 py-12 mt-12 shadow-inner rounded-t-3xl">
  <div className="flex flex-col lg:flex-row justify-between gap-8">
    {/* About */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Tentang WebRomantis</h3>
      <p className="text-sm max-w-md leading-relaxed">
        WebRomantis adalah penyedia template website interaktif dan penuh
        cinta, cocok untuk pasangan, perayaan spesial.
        Semua template kami dibuat dengan desain modern dan teknologi terkini. Gratis hosting github pages.
      </p>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Kontak Kami</h3>
      <p className="text-sm">WhatsApp: +62 857-0895-2132</p>
      <div className="flex gap-4 mt-4 text-xl">
        <a href="https://www.instagram.com/helyy.rz"  target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition"><FaInstagram /></a>
        <a href="https://www.tiktok.com/@adamndelion"  target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition"><FaTiktok /></a>
        <a href="https://wa.me/6285708952132"  target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition"><FaWhatsapp /></a>
      </div>
    </div>
  </div>

  <div className="mt-10 text-center text-sm text-pink-200 border-t border-pink-500 pt-4">
    &copy; {new Date().getFullYear()} WebRomantis. All rights reserved.
  </div>
</footer>

    </div>
  );
};

export default Home;
