input.onButtonPressed(Button.A, function () {
    číslo += 1
})
input.onButtonPressed(Button.AB, function () {
    opakuj = 1
})
input.onButtonPressed(Button.B, function () {
    číslo += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    opakuj = 0
})
let opakuj = 0
opakuj = 1
let číslo = 0
let seznam = [
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `),
images.createImage(`
    . . . . #
    . . . # .
    . . # . .
    . . . . .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . . . . .
    . . # # #
    . . . . .
    . . . . .
    `),
images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . # .
    . . . . #
    `),
images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `),
images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . # . . .
    # . . . .
    `),
images.createImage(`
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    `),
images.createImage(`
    # . . . .
    . # . . .
    . . # . .
    . . . . .
    . . . . .
    `)
]
seznam[číslo].showImage(0)
basic.forever(function () {
    if (číslo < 0) {
        číslo = 7
    } else if (číslo > 7) {
        číslo = 0
    }
    seznam[číslo].showImage(0)
})
basic.forever(function () {
    while (opakuj == 0) {
        if (číslo < 0) {
            číslo = 7
        } else if (číslo > 7) {
            číslo = 0
        }
        seznam[číslo].showImage(0)
        basic.pause(1000)
        číslo += 1
    }
})
