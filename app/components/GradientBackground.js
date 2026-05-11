'use client';
import { useEffect, useRef } from 'react';

export default function GradientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    let animationId;
    let t = 0;

    const setSize = () => {
      canvas.width = parent.offsetWidth || window.innerWidth;
      canvas.height = parent.offsetHeight || window.innerHeight;
    };
    setSize();

    const ro = new ResizeObserver(setSize);
    ro.observe(parent);

    const nodes = [
      { bx: 0.15, by: 0.10, ax: 0.18, ay: 0.10, fx: 0.00028, fy: 0.00038, px: 0.0,  py: 1.2, r: 0.52, color: [100, 40, 210], opacity: 0.11 },
      { bx: 0.82, by: 0.15, ax: 0.14, ay: 0.12, fx: 0.00038, fy: 0.00028, px: 2.1,  py: 0.4, r: 0.46, color: [25, 110, 200], opacity: 0.09 },
      { bx: 0.50, by: 0.40, ax: 0.22, ay: 0.10, fx: 0.00032, fy: 0.00042, px: 1.0,  py: 2.6, r: 0.50, color: [160, 35, 175], opacity: 0.10 },
      { bx: 0.08, by: 0.55, ax: 0.10, ay: 0.15, fx: 0.00042, fy: 0.00032, px: 3.5,  py: 0.9, r: 0.42, color: [50, 150, 175], opacity: 0.08 },
      { bx: 0.88, by: 0.65, ax: 0.13, ay: 0.12, fx: 0.00030, fy: 0.00048, px: 0.5,  py: 1.8, r: 0.40, color: [115, 55, 225], opacity: 0.09 },
      { bx: 0.42, by: 0.80, ax: 0.20, ay: 0.10, fx: 0.00048, fy: 0.00030, px: 2.8,  py: 3.1, r: 0.38, color: [70, 25, 165], opacity: 0.08 },
      { bx: 0.65, by: 0.90, ax: 0.16, ay: 0.08, fx: 0.00035, fy: 0.00025, px: 1.6,  py: 0.7, r: 0.44, color: [30, 80, 210],  opacity: 0.07 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      t++;

      nodes.forEach(node => {
        const x = (node.bx + Math.sin(t * node.fx + node.px) * node.ax) * w;
        const y = (node.by + Math.sin(t * node.fy + node.py) * node.ay) * h;
        const radius = node.r * Math.max(w, h);
        const [r, g, b] = node.color;

        const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
        grad.addColorStop(0,    `rgba(${r},${g},${b},${node.opacity})`);
        grad.addColorStop(0.45, `rgba(${r},${g},${b},${node.opacity * 0.35})`);
        grad.addColorStop(1,    `rgba(${r},${g},${b},0)`);

        ctx.beginPath();
        ctx.fillStyle = grad;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
