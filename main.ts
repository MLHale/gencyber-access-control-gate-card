input.onButtonPressed(Button.A, function () {
    passwordinput = "" + passwordinput + "A"
})
// reset password and door when both buttons are pressed
input.onButtonPressed(Button.AB, function () {
    passwordinput = ""
    if (pins.analogReadPin(AnalogPin.P0) != 180) {
        // close the door
        pins.servoWritePin(AnalogPin.P0, 180)
    }
})
input.onButtonPressed(Button.B, function () {
    passwordinput = "" + passwordinput + "B"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (password == passwordinput) {
        basic.showIcon(IconNames.Yes)
        // Open the door
        pins.servoWritePin(AnalogPin.P0, 90)
    } else {
        basic.showIcon(IconNames.No)
        passwordinput = ""
    }
})
let passwordinput = ""
let password = ""
// password composed of a's and b's (also a great band)
password = "ABBA"
// password composed of a's and b's (also a great band)
passwordinput = ""
// close the door
pins.servoWritePin(AnalogPin.P0, 180)
