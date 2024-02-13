// const canvas = document.getElementById('drawing-board');
// const toolbar = document.getElementById('toolbar');
// const ctx = canvas.getContext('2d');

// const canvasOffsetX = canvas.offsetLeft;
// const canvasOffsetY = canvas.offsetTop;

// canvas.width = window.innerWidth - canvasOffsetX;
// canvas.height = window.innerHeight - canvasOffsetY;

// let lineWidth = 5;
// let startX = 0;
// let startY = 0;
// let numClicks = 0;

// toolbar.addEventListener('click', e => {
//     if (e.target.id === 'clear') {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         numClicks = 0;
//     }
// });

// toolbar.addEventListener('change', e => {
//     if (e.target.id === 'stroke') {
//         ctx.strokeStyle = e.target.value;
//     }

//     if (e.target.id === 'lineWidth') {
//         lineWidth = e.target.value;
//     }
// });

// const draw = (e) => {
//     if (numClicks < 6) {
//         if (startX == 0 && startY == 0) {
//             startX = e.clientX;
//             startY = e.clientY;
//             numClicks++;
//             return;
//         }

//         ctx.lineWidth = lineWidth;
//         ctx.lineCap = 'round';

//         const x1 = startX;
//         const y1 = startY;
//         const x2 = e.clientX - canvasOffsetX;
//         const y2 = e.clientY - canvasOffsetY;

//         ctx.beginPath();
//         ctx.moveTo(x1, y1);
//         ctx.lineTo(x2, y2);
//         ctx.stroke();

//         startX = x2;
//         startY = y2;
//         numClicks++;
//    }
//      // else {
//     //     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     //     startX = 0;
//     //     startY = 0;
//     //     numClicks = 0;
//     // }
// };

// canvas.addEventListener('click', draw);

document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById('fileInput');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let image;

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const img = new Image();
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                image = img;
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(file);
    });

    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let lineWidth = 5;
    let startX = 0;
    let startY = 0;
    let numClicks = 0;

    const draw = (e) => {
    if (numClicks < 6) {
        if (startX == 0 && startY == 0) {
            startX = e.clientX;
            startY = e.clientY;
            numClicks++;
            return;
        }

        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';

        const x1 = startX;
        const y1 = startY;
        const x2 = e.clientX - canvasOffsetX;
        const y2 = e.clientY - canvasOffsetY;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        startX = x2;
        startY = y2;
        numClicks++;
   }
     // else {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     startX = 0;
    //     startY = 0;
    //     numClicks = 0;
    // }
};

canvas.addEventListener('click', draw);
});