radio.setGroup(210);
basic.showString("L");

//** Sender: Observerer spritdispenserens LED og sender signal ved skifte
minode.onLightSensorEvent(AnalogConnName.Analog_A1, function () {
    let m0value = minode.LightSensorGetLevel(AnalogConnName.Analog_A1);
    basic.pause(1250);
    if (m0value == 2){
        radio.sendValue("LM", 1);
        basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        `);
        basic.pause(10);
        basic.clearScreen();
    }
})