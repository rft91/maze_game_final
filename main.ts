info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeScoreBy(1)
    if (info.score() == 1) {
        tiles.setTilemap(tilemap`level_3`)
    } else if (info.score() == 2) {
        tiles.setTilemap(tilemap`level_4`)
    } else if (info.score() == 3) {
        tiles.setTilemap(tilemap`level1`)
    } else if (info.score() == 4) {
        tiles.setTilemap(tilemap`level2`)
    } else if (info.score() == 5) {
        tiles.setTilemap(tilemap`level3`)
    } else if (info.score() == 6) {
        tiles.setTilemap(tilemap`level4`)
    } else if (info.score() == 7) {
        tiles.setTilemap(tilemap`level5`)
    } else if (info.score() == 8) {
        tiles.setTilemap(tilemap`level6`)
    } else if (info.score() == 9) {
        tiles.setTilemap(tilemap`level7`)
    } else if (info.score() == 10) {
        tiles.setTilemap(tilemap`level8`)
    } else if (info.score() == 11) {
        tiles.setTilemap(tilemap`level9`)
    } else {
        game.gameOver(true)
    }
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestClosed)
    info.startCountdown(35)
})
let mySprite: Sprite = null
info.setScore(0)
mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `,img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . f e 3 3 3 3 3 3 3 3 3 3 e f . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f b 3 f f e e e e f f 3 b f . 
    f f b b f b f e e f b f b b f f 
    f b b b e 1 f 4 4 f 1 e b b b f 
    . f b b e e 4 4 4 4 4 f b b f . 
    . . f 4 4 4 e d d d b f e f . . 
    . . f e 4 4 e d d d d c 4 e . . 
    . . . f e e d d b d b b f e . . 
    . . . f f 1 d 1 d 1 1 f f . . . 
    . . . . . f f f b b f . . . . . 
    `,img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `,img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . f e 3 3 3 3 3 3 3 3 3 3 e f . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f b 3 f f e e e e f f 3 b f . 
    f f b b f b f e e f b f b b f f 
    f b b b e 1 f 4 4 f 1 e b b b f 
    . f b b f 4 4 4 4 4 e e b b f . 
    . . f e f b d d d e 4 4 4 f . . 
    . . e 4 c d d d d e 4 4 e f . . 
    . . e f b b d b d d e e f . . . 
    . . . f f 1 1 d 1 d 1 f f . . . 
    . . . . . f b b f f f . . . . . 
    `],
100,
true
)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tilemap`level_0`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.chestClosed)
scene.cameraFollowSprite(mySprite)
info.startCountdown(35)
