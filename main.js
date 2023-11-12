const knob = document.querySelector(".knob");
const audio = document.querySelector(".audio");
const prog = document.querySelector(".progress > div");
const bar = document.querySelector(".progress");
const play = document.querySelector(".play-btn");
const percent = document.querySelector(".percent");

audio.volume= 0.0;

let prevX = 0;
let prevY = 0;

let vol = 0;

barW = bar.clientWidth;
function volumeKnob(e){
    const w= knob.clientWidth / 2;
    const h=knob.clientHeight / 2;

    const x = e.clientX = knob.offsetLeft;
    const y= e.clienteY = knob.offsetTop;

    const deltaX = w - x;
    const deltaY = h - y;

    const rad = Math.atan2(dealtaY, deltaX);

    let deg = rad * (180 / Math.PI)
}





