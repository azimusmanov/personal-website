'use client';
import { useEffect, useRef } from 'react';

export default function BackgroundEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let columns = [];

    const fontSize = 12;
    const colSpacing = 22;

    const initColumns = () => {
      const numCols = Math.floor(canvas.width / colSpacing);
      columns = Array.from({ length: numCols }, () => {
        const length = Math.floor(8 + Math.random() * 18);
        return {
          y: Math.random() * -canvas.height * 2,
          speed: 0.5 + Math.random() * 0.8,
          length,
          opacity: 0.1 + Math.random() * 0.4,
          chars: Array.from({ length }, () => (Math.random() > 0.5 ? '1' : '0')),
        };
      });
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initColumns();
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      columns.forEach((col, i) => {
        const x = i * colSpacing;
        col.chars.forEach((char, j) => {
          const y = col.y + j * fontSize * 1.8;
          if (y < 0 || y > canvas.height) return;
          const fade = 1 - j / col.length;
          ctx.fillStyle = `rgba(148, 110, 210, ${col.opacity * fade})`;
          ctx.fillText(char, x, y);
        });

        col.y += col.speed;

        if (col.y > canvas.height + col.length * fontSize * 1.8) {
          col.y = -col.length * fontSize * 1.8 * (1 + Math.random() * 2);
          col.chars = col.chars.map(() => (Math.random() > 0.5 ? '1' : '0'));
          col.speed = 0.5 + Math.random() * 0.8;
          col.opacity = 0.06 + Math.random() * 0.08;
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}
    />
  );
}
