player.onChat("run", function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
player.tell(mobs.target(NEAREST_PLAYER), "Hi!")
