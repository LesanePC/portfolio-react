import { useEffect, useRef } from 'react';

export const CanvasBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let particles: Particle[] = [];
        let animationId: number | null = null;

        const PARTICLE_OPACITY = 0.6;
        const LINE_OPACITY = 0.25;
        const PARTICLE_COLOR = '100, 200, 250';
        const BASE_PARTICLE_COUNT = 80;
        const MAX_PARTICLES = 120;
        const MOBILE_MAX_PARTICLES = 60;

        class Particle {
            x: number = 0;
            y: number = 0;
            size: number = 0;
            speedX: number = 0;
            speedY: number = 0;

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 3 + 1.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > width) this.speedX *= -1;
                if (this.y < 0 || this.y > height) this.speedY *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(${PARTICLE_COLOR}, ${PARTICLE_OPACITY})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const createParticles = (count: number) => {
            particles = [];
            for (let i = 0; i < count; i++) {
                const particle = new Particle();
                particle.reset();
                particles.push(particle);
            }
        };

        const connectParticles = () => {
            if (particles.length > 150) return;

            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distSq = dx * dx + dy * dy;
                    const maxDist = (width + height) * 0.2;
                    const maxDistSq = maxDist * maxDist;

                    if (distSq < maxDistSq) {
                        const opacity = LINE_OPACITY * (1 - distSq / maxDistSq);
                        ctx.strokeStyle = `rgba(${PARTICLE_COLOR}, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const resizeCanvas = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            const isMobile = width < 768;
            const maxParticles = isMobile ? MOBILE_MAX_PARTICLES : MAX_PARTICLES;

            const base = Math.max(50, Math.floor(((width * height) / (1920 * 1080)) * BASE_PARTICLE_COUNT));
            const particleCount = Math.min(maxParticles, base);
            createParticles(particleCount);
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, width, height);

            for (const particle of particles) {
                particle.update();
                particle.draw();
            }

            connectParticles();
            animationId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            resizeCanvas();
        };

        window.addEventListener('resize', handleResize);
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationId) cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef}
            id="backgroundCanvas"
            style={{
                display: 'block',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};