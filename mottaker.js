radio.setGroup(210);
basic.showString("Rec");

//** Mottaker: Mottak av data og lagring som variabler på mottaker, kommunikasjon til PC for loggføring
let leftLaser: number;
let leftMovement: number;
let rightLaser: number;
let rightMovement: number;

radio.onReceivedValue(function (name, value) {
    if (name == "RM") {
        dataLog("RM");
        basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . . . . .
        . . . . #
        `)//bruker display for å feilsøke
    } else if (name == "Laser") {
        dataLog("Laser");
        basic.showLeds(`
        . . # . .
        . . # . .
        . . # # .
        . . . . .
        . . . . .
        `)
    } else if (name == "LM") {
        dataLog("LM");
        basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . . . . .
        # . . . .
        `)
    }
    basic.pause(50)
    basic.clearScreen();
})
//Bruker variabler fra .onReceivedValue funksjonen. Skriver disse i seriell port før den nulstiller. 
let recievedSensor: string;

function dataLog(recievedSensor: string) {
    serial.writeValue(recievedSensor, 1);
    basic.pause(10);
    serial.writeValue(recievedSensor, 0);    
}