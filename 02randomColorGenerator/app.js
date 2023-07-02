let button = document.querySelector('button');
let h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    let newColor = randomColor();
    document.body.style.backgroundColor = newColor;
})

const randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    
    if (r<60 || g<60 || b<60) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }

    h1.innerText = `Red (${r}), Green (${g}), Blue (${b})`;

    return `rgb(${r}, ${g}, ${b})`;
}