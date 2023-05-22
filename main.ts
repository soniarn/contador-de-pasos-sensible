input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showNumber(0)
})
let steps = 0
steps = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showNumber(steps)
    }
})
