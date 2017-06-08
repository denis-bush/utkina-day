function randomQuote(state) {
    var cloneCard, cardNum;
    
    document.getElementById('idDarkBack').style.display = state;
    document.getElementById('idPopUp').style.display = state;
    if (state == 'block') {
        cardNum = document.getElementsByClassName("card")[Math.round(Math.random() * 16)];
        cloneCard = cardNum.cloneNode(true);
        document.getElementById('idPopUp').appendChild(cloneCard);
    }
    else {
        cloneCard = document.getElementsByClassName("card")[0];
        document.getElementById('idPopUp').removeChild(cloneCard);
    }
}

function getColor() {
    var hexStr = '0123456789ABCDEF'.split('');
    var randomColor = '#';
    for (var i = 0; i < 6; i++) {
        randomColor += hexStr[Math.round(Math.random() * 15)];
    }
    return randomColor;
}

function invertColor(color) {
    var r = '', g = '', b = '', rhex, ghex, bhex;
    color = color.split('');
    
    r += color[1] + color[2];
    g += color[3] + color[4];
    b += color[5] + color[6];
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
    
    rhex = r.toString(16);
    ghex = g.toString(16);
    bhex = b.toString(16);
    if (rhex.length == 1) { rhex = "0" + rhex };
    if (ghex.length == 1) { ghex = "0" + ghex };
    if (bhex.length == 1) { bhex = "0" + bhex };
    
    color = "#" + rhex + ghex + bhex;
    return(color);
}

function playDOM() {
    var color;
    for (var i = 0; i < 17; i++) {
        color = getColor();
        document.getElementsByClassName("card")[i].style.backgroundColor = color;
        document.getElementsByClassName("card")[i].style.color = invertColor(color);
    }
}

//document.getElementById('b_quote').addEventListener("click", randomQuote);