import React, { useRef, useEffect } from "react";

const HeartCanvas = () => {
  const canvasRef = useRef(null);
  const hearts = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight * 0.8); // hanya 80% tinggi viewport

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight * 0.8;
    };
    window.addEventListener("resize", handleResize);

    const createHeart = () => {
      if (hearts.current.length > 50) return; // batasi maksimal 50 heart
      const x = Math.random() * width;
      const size = Math.random() * 10 + 6;
      const speed = Math.random() * 0.5 + 0.2;
      const y = -size;
      const opacity = Math.random() * 0.4 + 0.2;
      const color = `rgba(255, 105, 180, ${opacity})`;

      hearts.current.push({ x, y, size, speed, color });
    };

    const drawHeart = (x, y, size, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(size / 12, size / 12);
      ctx.beginPath();
      ctx.moveTo(0, 3);
      ctx.bezierCurveTo(-5, -5, -12, 2, 0, 12);
      ctx.bezierCurveTo(12, 2, 5, -5, 0, 3);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      if (Math.random() < 0.03) createHeart(); // lebih jarang
      hearts.current.forEach((heart, index) => {
        heart.y += heart.speed;
        drawHeart(heart.x, heart.y, heart.size, heart.color);
        if (heart.y > height + heart.size) {
          hearts.current.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-[80vh] z-0 pointer-events-none"
    />
  );
};

export default HeartCanvas;
