let dir2 = 0
input.calibrateCompass()
basic.forever(function () {
    dir2 = input.compassHeading()
    if (dir2 > 300 && dir2 < 330) {
        basic.showArrow(ArrowNames.North)
    } else if (dir2 > 60 && dir2 < 120) {
        basic.showArrow(ArrowNames.East)
        music.play(music.createSoundExpression(
        WaveShape.Noise,
        2534,
        2534,
        255,
        0,
        5000,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.UntilDone)
    } else if (dir2 > 180 && dir2 < 210) {
        basic.showArrow(ArrowNames.South)
        music.play(music.createSoundExpression(
        WaveShape.Noise,
        2534,
        2534,
        255,
        0,
        5000,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.UntilDone)
    } else if (dir2 > 240 && dir2 < 300) {
        basic.showArrow(ArrowNames.West)
        music.play(music.createSoundExpression(
        WaveShape.Noise,
        2534,
        2534,
        255,
        0,
        5000,
        SoundExpressionEffect.None,
        InterpolationCurve.Logarithmic
        ), music.PlaybackMode.UntilDone)
    }
})
