const colourFlipperApp = {};

colourFlipperApp.hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

colourFlipperApp.randomNumberGenerator = () => {
    return Math.floor(Math.random() * (colourFlipperApp.hex).length);
}

colourFlipperApp.changeHex = () => {
    let hexColour = '#';
    console.log(hexColour);
    for(let i = 0; i < 6; i++) {
        hexColour = hexColour + colourFlipperApp.hex[colourFlipperApp.randomNumberGenerator()];
        console.log(hexColour);
    }

    $('body').css('background-color', hexColour);
    $('span').text(hexColour);
}

$(() => {
    // colourFlipperApp.changeHex();
    $('button').on('click', () => {
        colourFlipperApp.changeHex();
    });
})