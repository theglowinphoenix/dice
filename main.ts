let dice = 0
input.onButtonPressed(Button.A, function () {
    dice = randint(1, 6)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showNumber(dice)
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(0, 6)
    music.playTone(262, music.beat(BeatFraction.Whole))
    if (dice == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (dice == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (dice == 5) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (dice == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (dice == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    music.setVolume(49)
})
