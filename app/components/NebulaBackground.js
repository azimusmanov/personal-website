'use client';
import { useEffect, useRef } from 'react';

export default function NebulaBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const clouds = [
      { x: 0.15, y: 0.25, r: 0.42, color: [110, 50, 190], vx: 0.00007, vy: 0.00004, opacity: 0.09 },
      { x: 0.72, y: 0.18, r: 0.35, color: [40, 140, 190], vx: -0.00005, vy: 0.00006, opacity: 0.08 },
      { x: 0.48, y: 0.65, r: 0.45, color: [160, 50, 150], vx: 0.00004, vy: -0.00005, opacity: 0.07 },
      { x: 0.88, y: 0.55, r: 0.3, color: [160, 100, 30], vx: -0.00006, vy: -0.00004, opacity: 0.06 },
      { x: 0.08, y: 0.75, r: 0.35, color: [70, 30, 150], vx: 0.00005, vy: -0.00007, opacity: 0.08 },
      { x: 0.55, y: 0.35, r: 0.28, color: [90, 60, 200], vx: -0.00004, vy: 0.00005, opacity: 0.07 },
    ];

    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.4 + Math.random() * 1.2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.004 + Math.random() * 0.008,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      clouds.forEach(c => {
        c.x += c.vx;
        c.y += c.vy;
        if (c.x < -0.3 || c.x > 1.3) c.vx *= -1;
        if (c.y < -0.3 || c.y > 1.3) c.vy *= -1;

        const cx = c.x * w;
        const cy = c.y * h;
        const radius = c.r * Math.max(w, h);
        const [r, g, b] = c.color;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        grad.addColorStop(0,   `rgba(${r},${g},${b},${c.opacity})`);
        grad.addColorStop(0.45,`rgba(${r},${g},${b},${c.opacity * 0.4})`);
        grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      stars.forEach(s => {
        s.phase += s.speed;
        const alpha = ((Math.sin(s.phase) + 1) / 2) * 0.55;
        ctx.beginPath();
        ctx.fillStyle = `rgba(210, 200, 255, ${alpha})`;
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
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
