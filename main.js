const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

const img = new Image();
img.src = "assets/background.jpg";
img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
