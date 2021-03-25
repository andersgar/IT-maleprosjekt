radio.setGroup(210);
basic.showString("Laser");

//** Lasersensor: Observerer lasersensorens relee og sender signal ved endring
basic.forever(function () {
    let p0value = pins.digitalReadPin(DigitalPin.P0);
    if (p0value == 0) {
        while(true){
            let p0value = pins.digitalReadPin(DigitalPin.P0);
            basic.pause(100);
            if (p0value == 1){
                break;
            }
        }
        radio.sendValue("Laser", 1);
        basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `);
    }
    basic.pause(10);
    basic.clearScreen();
})