radio.onReceivedValue(function (name, value) {
    if (status == 1) {
        if (value == 0) {
            status = 0
            basic.showIcon(IconNames.No)
        }
    }
})
let status = 0
for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
status = 1
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    radio.setGroup(1)
    if (input.buttonIsPressed(Button.A)) {
        if (status == 1) {
            radio.sendValue("Status", 0)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . . . . .
                # . # . #
                . . . . .
                . . . . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        status = 1
        basic.showIcon(IconNames.Yes)
    }
})
