// Dwitter Shim by Frank Force 2020
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

function u(t) { // dwitter code goes here

    // https://www.dwitter.net/d/18759
    for (k = i = 802; i; x.fillRect(b ? 940 - r / 2 - (e ? e * 2 - 3 : S(m)) * r / .8 : 2e3 * S(i), b ? 640 + r * (!e || C(m)) : i * 13 % k, r = i-- < k ? b ? r : i % 5 + 1 : 1e9, r))m = i + t * 120 ^ k, r = 1e7 / i / i, e = m % 3, b = i < 600, x.fillStyle = R(v = b ? i / 3 + S(m *= m) * 29 : i < k ? k : 0, v, v)

}

const c = document.getElementById('hole');
c.width = window.innerWidth;
c.height = window.innerHeight;

let time = 0;
let frame = 0;
let FPS = 60;
let x = c.getContext('2d');
let S = Math.sin;
let C = Math.cos;
let T = Math.tan;
let R = (r, g, b, a = 1) => `rgba(${r | 0},${g | 0},${b | 0},${a})`;

let loop = (frameTime) => {
    requestAnimationFrame(loop);

    // update time
    time = frame++ / FPS;
    if (time * FPS | 0 == frame - 2)
        time += 1e-6; // fixup floating point

    // update user function
    u(time);

    {
        // fill window
        c.style.width = c.style.height = '';
        const aspect = c.width / c.height;
        if (aspect > innerWidth / innerHeight)
            c.style.height = '100%';
        else
            c.style.width = '100%';
    }
}

loop();
