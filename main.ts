fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.servo1.fwdSetSpeed(0)
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x000000)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.servo1.fwdSetSpeed(turbinespeed)
    if (turbinespeed <= -80) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    turbinespeed = fwdSensors.dial1.fwdPosition()
    fwdMotors.servo1.fwdSetSpeed(turbinespeed)
    if (turbinespeed >= 80) {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0x00ff00)
    } else {
        fwdSensors.ledRing.fwdSetAllPixelsColour(0xffff00)
    }
})
let turbinespeed = 0
turbinespeed = 0
