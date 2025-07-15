const body = document.getElementsByTagName("body")[0];
const hyperlinks = document.getElementsByTagName("a");

function setAnchorColor(color) {
    Array.from(hyperlinks).forEach(link => {
        link.style.color = color;
    })
}


function setColorSolid(name) {
    body.style.background = null;
    body.style.backgroundColor = name;
    if (name === "blue"){
        setAnchorColor("white");
    }
    else {
        setAnchorColor("blue");
    }
}

function setColorGradient(color1, color2){
    body.style.backgroundColor = null;
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    setAnchorColor("blue");
}

function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const color = `rgb(${red}, ${green}, ${blue})`;
    setColorSolid(color);
}

function randomGradient(){
    const red1 = Math.round(Math.random() * 255);
    const green1 = Math.round(Math.random() * 255);
    const blue1 = Math.round(Math.random() * 255);
    const color1 = `rgb(${red1}, ${green1}, ${blue1})`;
    const red2 = Math.round(Math.random() * 255);
    const green2 = Math.round(Math.random() * 255);
    const blue2 = Math.round(Math.random() * 255);
    const color2 = `rgb(${red2}, ${green2}, ${blue2})`;
    setColorGradient(color1, color2);
}

