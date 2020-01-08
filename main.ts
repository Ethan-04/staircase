let Juan = sprites.create(img`
. . . . . . . f . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d f d f d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . . d d d . . . . . . . 
. . . . 8 8 8 8 8 8 8 . . . . . 
. d d d 8 8 8 8 8 8 8 d d d . . 
. d d d 8 8 8 8 8 8 8 d d d . . 
. d d d 8 8 8 8 8 8 8 d d d . . 
. d d d 8 8 8 8 8 8 8 d d d . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
`, SpriteKind.Player)
let Jeff = sprites.create(img`
. . . . . . . . f . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . d d d d d . . . . . 
. . . . . . d f d f d . . . . . 
. . . . . . d d d d d . . . . . 
. . . . . . d d d d d . . . . . 
. . . . . . . d d d . . . . . . 
. . d d d 7 7 7 7 7 7 7 d d d . 
. . d d d 7 7 7 7 7 7 7 d d d . 
. . d d d 7 7 7 7 7 7 7 d d d . 
. . d d d 7 7 7 7 7 7 7 d d d . 
. . . . . 7 7 7 7 7 7 7 . . . . 
. . . . . f f f f f f f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . f f f f f f f . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(3)
for (let index = 0; index < 9; index++) {
    pause(100)
    Juan.y += 4
    Jeff.y += -6
    pause(100)
    Juan.x += 4
    Jeff.x += -6
}
for (let index = 0; index < 9; index++) {
    pause(100)
    Juan.y += -4
    Jeff.y += 6
    pause(100)
    Juan.x += -4
    Jeff.x += 6
}
