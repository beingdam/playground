const getColor = () => {
    // Hex Color Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("colorcode").innerText = randomColor;
}

// event call
document.getElementById("btn").addEventListener(
    'click',
    getColor
)

// initial call
getColor();