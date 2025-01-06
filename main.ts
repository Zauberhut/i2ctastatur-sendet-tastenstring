function tasten () {
    code = pins.i2cReadNumber(101, NumberFormat.Int16LE, false)
    serial.writeNumber(code)
    if (letzer_Code != code) {
        radio.sendString(taste)
    }
    if (code == 1) {
        taste = "1"
        music.ringTone(131)
    } else if (code == 2) {
        taste = "4"
        music.ringTone(175)
    } else if (code == 4) {
        taste = "7"
        music.ringTone(247)
    } else if (code == 8) {
        taste = "*"
        music.ringTone(330)
    } else if (code == 16) {
        taste = "2"
        music.ringTone(147)
    } else if (code == 32) {
        taste = "5"
        music.ringTone(196)
    } else if (code == 64) {
        taste = "8"
        music.ringTone(262)
    } else if (code == 128) {
        taste = "0"
        music.ringTone(349)
    } else if (code == 256) {
        taste = "3"
        music.ringTone(165)
    } else if (code == 512) {
        taste = "6"
        music.ringTone(220)
    } else if (code == 1024) {
        taste = "9"
        music.ringTone(294)
    } else if (code == 2048) {
        taste = "#"
        music.ringTone(392)
    } else if (code == 4096) {
        taste = "A"
        music.ringTone(988)
    } else if (code == 8192) {
        taste = "B"
        music.ringTone(932)
    } else if (code == 16384) {
        taste = "C"
        music.ringTone(880)
    } else if (code == -32768) {
        taste = "D"
        music.ringTone(831)
    } else {
        taste = "x"
        music.stopAllSounds()
    }
    letzer_Code = pins.i2cReadNumber(101, NumberFormat.Int16LE, false)
}
let taste = ""
let letzer_Code = 0
let code = 0
let strip = informatiktheater.create(HiwonderPins.Board, 2, PowerSource.Intern)
strip.showColor(informatiktheater.colors(NeoPixelColors.Blue))
strip.setBrightness(150)
radio.setGroup(1)
music.setVolume(50)
basic.forever(function () {
    tasten()
})
basic.forever(function () {
    if (taste != "x") {
        basic.showString(taste)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (code != 0) {
        strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Green), 1)
    } else {
        strip.setPixelColorRange(0, informatiktheater.colors(NeoPixelColors.Black), 1)
    }
    strip.show()
})
