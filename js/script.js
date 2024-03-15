const cavasEl = document.querySelector("canvas"),
    canvasCtx = cavasEl.getContext("2d");

const lineWidth = 15;
const gapX = 10;

const field = {
    w: 0,
    h: 0,
    draw: () => {
        // campo
        canvasCtx.fillStyle = "#286047";
        canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
}

const setUp = () => {
    cavasEl.width = canvasCtx.width = window.innerWidth;
    cavasEl.height = canvasCtx.height = window.innerHeight;
}

const draw = () => {


    canvasCtx.fillStyle = "#ffffff";

    canvasCtx.fillRect(window.innerWidth / 2 - lineWidth / 2, 0, lineWidth, window.innerHeight);

    // raquete esquerda
    canvasCtx.fillStyle = "ffffff";
    canvasCtx.fillRect(gapX, 240, lineWidth, 200);

    // raquete direita
    canvasCtx.fillStyle = "ffffff";
    canvasCtx.fillRect(window.innerWidth - lineWidth - gapX, 240, lineWidth, 200);

    // bola
    canvasCtx.fillStyle = "ffffff";
    canvasCtx.beginPath();
    canvasCtx.arc(120, 240, 20, 0, 2 * Math.PI, false);
    canvasCtx.fill();
}

setUp();
draw();
