input.onButtonPressed(Button.A, function () {
    list[global_index] = 220
    global_index += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    is_playing = false
})
input.onButtonPressed(Button.AB, function () {
    is_playing = true
    music.setTempo(120)
    while (is_playing == true) {
        for (let index = 0; index <= list.length - 1; index++) {
            global_index = index
            basic.showString("" + (index + 1))
            music.play(music.tonePlayable(list[index], music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    list[global_index] = 988
    global_index += 1
})
let is_playing = false
let list: number[] = []
let global_index = 0
global_index = 0
list = []
