const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 200; // Adjust height to match CSS

const letters = Array(256).join("1").split("");
const fontSize = 10;

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px monospace`;

    letters.map((y_pos, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x_pos = index * fontSize;
        ctx.fillText(text, x_pos, y_pos);
        letters[index] = y_pos > canvas.height && Math.random() > 0.975 ? 0 : y_pos + fontSize;
    });
}

setInterval(draw, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = 200; // Adjust height to match CSS
});
