input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showString("" + (pasos * 0.68))
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(pasos * 2)
})
input.onButtonPressed(Button.B, function () {
    pasos = 0
    basic.showNumber(0)
})
let pasos = 0
pasos = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1500) {
        pasos += 1
        basic.showNumber(pasos)
    }
})
