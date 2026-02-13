function showSurprise() {
    document.getElementById("surprise").style.display = "block";
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

function confettiBlast() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 6 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            speedY: Math.random() * 3 + 2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.y += p.speedY;

            if (p.y > canvas.height) {
                p.y = 0;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}

function playMusic() {
    const music = document.getElementById("bgMusic");
    music.play().catch(error => {
        console.log("Autoplay blocked:", error);
    });
}

